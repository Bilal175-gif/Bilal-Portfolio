"use client";

import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  Sparkles,
  shaderMaterial,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import { AdditiveBlending, Color, MathUtils } from "three";

const EnergyFieldMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorA: new Color("#b76cff"),
    uColorB: new Color("#67e8f9"),
  },
  `
    uniform float uTime;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      vUv = uv;

      vec3 transformed = position;
      float waveA = sin(position.y * 6.0 + uTime * 1.4) * 0.07;
      float waveB = sin(position.x * 5.5 - uTime * 1.2) * 0.05;
      float waveC = sin((position.z + position.x) * 4.0 + uTime * 1.6) * 0.04;
      float wave = waveA + waveB + waveC;

      transformed += normal * wave;
      vWave = wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      vec2 centerUv = vUv - 0.5;
      float radius = 1.0 - smoothstep(0.15, 0.78, length(centerUv));
      float stripes = 0.5 + 0.5 * sin((vUv.y * 18.0) + (uTime * 0.9) + (vWave * 20.0));
      float pulse = 0.5 + 0.5 * sin((uTime * 1.2) + (vUv.x * 9.0));
      vec3 color = mix(uColorA, uColorB, clamp(vUv.y + stripes * 0.25, 0.0, 1.0));
      float alpha = radius * (0.18 + stripes * 0.12 + pulse * 0.08);

      gl_FragColor = vec4(color, alpha);
    }
  `
);

extend({ EnergyFieldMaterial });

function OrbitingShard({ radius, speed, offset, color, scale = 1, y = 0 }) {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const t = state.clock.elapsedTime * speed + offset;
    groupRef.current.position.set(
      Math.cos(t) * radius,
      y + Math.sin(t * 1.4) * 0.22,
      Math.sin(t) * radius
    );
    groupRef.current.rotation.x = t * 0.9;
    groupRef.current.rotation.y = t * 0.65;
    groupRef.current.rotation.z = t * 0.4;
  });

  return (
    <group ref={groupRef}>
      <mesh scale={scale}>
        <octahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          roughness={0.18}
          metalness={0.72}
        />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 5]} scale={scale * 1.8}>
        <torusGeometry args={[0.24, 0.012, 14, 40]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        key: index,
        position: [
          (Math.random() - 0.5) * 5.8,
          (Math.random() - 0.5) * 4.6,
          (Math.random() - 0.5) * 4.8,
        ],
        scale: 0.04 + Math.random() * 0.08,
        color: index % 2 === 0 ? "#d8c7ff" : "#89efff",
      })),
    []
  );

  return particles.map((particle) => (
    <mesh key={particle.key} position={particle.position} scale={particle.scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color={particle.color} transparent opacity={0.45} />
    </mesh>
  ));
}

function SceneCore() {
  const cameraRigRef = useRef(null);
  const coreRef = useRef(null);
  const shellRef = useRef(null);
  const shaderRef = useRef(null);
  const ringRefs = useRef([]);
  const shardConfig = useMemo(
    () => [
      { radius: 2.25, speed: 0.7, offset: 0.2, color: "#d8b4fe", scale: 0.95, y: 0.2 },
      { radius: 2.75, speed: -0.52, offset: 1.5, color: "#67e8f9", scale: 0.8, y: -0.12 },
      { radius: 3.1, speed: 0.4, offset: 2.5, color: "#ffffff", scale: 0.62, y: 0.35 },
      { radius: 2.6, speed: -0.62, offset: 4.1, color: "#a855f7", scale: 0.76, y: -0.35 },
    ],
    []
  );

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;

    state.camera.position.x = MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.95, 0.035);
    state.camera.position.y = MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.55, 0.035);
    state.camera.lookAt(0, 0, 0);

    if (cameraRigRef.current) {
      cameraRigRef.current.rotation.y = MathUtils.lerp(
        cameraRigRef.current.rotation.y,
        state.pointer.x * 0.28,
        0.05
      );
      cameraRigRef.current.rotation.x = MathUtils.lerp(
        cameraRigRef.current.rotation.x,
        state.pointer.y * 0.18,
        0.05
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.18;
      coreRef.current.rotation.z = Math.sin(elapsed * 0.45) * 0.08;
    }

    if (shaderRef.current) {
      shaderRef.current.uTime = elapsed;
    }

    if (shellRef.current) {
      shellRef.current.rotation.x -= delta * 0.12;
      shellRef.current.rotation.y += delta * 0.08;
    }

    ringRefs.current.forEach((ring, index) => {
      if (!ring) {
        return;
      }

      ring.rotation.z += delta * (index % 2 === 0 ? 0.16 + index * 0.02 : -0.12 - index * 0.02);
      ring.rotation.x = Math.sin(elapsed * 0.3 + index) * 0.22;
    });
  });

  return (
    <>
      <fog attach="fog" args={["#12032a", 6, 16]} />
      <PerspectiveCamera makeDefault position={[0, 0.1, 7.2]} fov={32} />

      <ambientLight intensity={0.7} />
      <hemisphereLight args={["#ffffff", "#170537", 0.9]} />
      <pointLight position={[0, 0.2, 3.8]} intensity={18} color="#b26cff" />
      <pointLight position={[2.8, 2.4, 2.8]} intensity={8} color="#74f0ff" />
      <pointLight position={[-2.5, -1.8, 2.8]} intensity={5} color="#ffffff" />

      <group ref={cameraRigRef}>
        <Float speed={1.4} rotationIntensity={0.22} floatIntensity={0.34}>
          <group ref={coreRef}>
            <mesh scale={1.84}>
              <sphereGeometry args={[1.2, 96, 96]} />
              <energyFieldMaterial
                ref={shaderRef}
                transparent
                depthWrite={false}
                blending={AdditiveBlending}
              />
            </mesh>

            <mesh>
              <icosahedronGeometry args={[1.48, 9]} />
              <MeshTransmissionMaterial
                color="#d9bbff"
                emissive="#b76cff"
                emissiveIntensity={0.65}
                roughness={0.04}
                thickness={0.68}
                ior={1.2}
                chromaticAberration={0.1}
                anisotropy={0.08}
                distortion={0.24}
                distortionScale={0.46}
                temporalDistortion={0.18}
                samples={4}
                resolution={256}
                transparent
              />
            </mesh>

            <mesh ref={shellRef} scale={1.24}>
              <icosahedronGeometry args={[1.54, 1]} />
              <meshStandardMaterial
                color="#8ef1ff"
                emissive="#7fdcff"
                emissiveIntensity={1}
                wireframe
                transparent
                opacity={0.5}
              />
            </mesh>

            <mesh rotation={[0.6, 0.45, 0.1]}>
              <torusKnotGeometry args={[0.72, 0.16, 180, 24]} />
              <meshStandardMaterial
                color="#f8ecff"
                emissive="#bb7cff"
                emissiveIntensity={0.55}
                roughness={0.18}
                metalness={0.75}
                transparent
                opacity={0.82}
              />
            </mesh>

            {[1.95, 2.35, 2.85].map((radius, index) => (
              <mesh
                key={radius}
                ref={(element) => {
                  ringRefs.current[index] = element;
                }}
                rotation={[index * 0.65, index === 1 ? 0 : Math.PI / 3, index * 0.22]}
                scale={[1, 1, index === 1 ? 0.76 : 1]}
              >
                <torusGeometry args={[radius, index === 1 ? 0.028 : 0.02, 20, 180]} />
                <meshBasicMaterial
                  color={index === 1 ? "#89efff" : "#f4d8ff"}
                  transparent
                  opacity={index === 1 ? 0.36 : 0.24}
                />
              </mesh>
            ))}
          </group>
        </Float>

        {shardConfig.map((shard, index) => (
          <OrbitingShard key={index} {...shard} />
        ))}

        <ParticleField />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.45, 0]}>
        <circleGeometry args={[5.2, 64]} />
        <meshBasicMaterial color="#56d6ff" transparent opacity={0.06} />
      </mesh>

      <Sparkles
        count={110}
        scale={[7.2, 5, 7]}
        size={2.4}
        speed={0.45}
        opacity={0.65}
        color="#ddd6fe"
      />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0.1, 7.2], fov: 32 }} dpr={[1, 1.6]} gl={{ antialias: true }}>
      <color attach="background" args={["#12032a"]} />
      <SceneCore />
    </Canvas>
  );
}
