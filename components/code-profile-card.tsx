import { Braces, Code2, Layers3, Waypoints } from "lucide-react";

const stack = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Braces },
  { name: "Next.js", icon: Layers3 },
  { name: "REST APIs", icon: Waypoints },
];

export function CodeProfileCard() {
  return (
    <div className="code-profile">
      <div className="code-profile__glow" aria-hidden="true" />
      <div className="code-window">
        <div className="code-window__bar">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>developer.ts</span>
          <span className="code-window__status">TypeScript</span>
        </div>
        <div className="code-window__body" role="img" aria-label="TypeScript profile for Muhammad Bilal">
          <ol className="code-lines">
            <li>
              <span className="syntax-keyword">const</span> developer = {"{"}
            </li>
            <li>
              &nbsp;&nbsp;name: <span className="syntax-string">&apos;Muhammad Bilal&apos;</span>,
            </li>
            <li>
              &nbsp;&nbsp;role:{" "}
              <span className="syntax-string">&apos;Frontend-focused full-stack developer&apos;</span>,
            </li>
            <li>
              &nbsp;&nbsp;focus: [
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">&apos;Product UI&apos;</span>,{" "}
              <span className="syntax-string">&apos;Responsive web&apos;</span>,{" "}
              <span className="syntax-string">&apos;APIs&apos;</span>
            </li>
            <li>
              &nbsp;&nbsp;],
            </li>
            <li>
              &nbsp;&nbsp;stack: {"{"}
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;frontend: [
              <span className="syntax-string">&apos;React&apos;</span>,{" "}
              <span className="syntax-string">&apos;Next.js&apos;</span>,{" "}
              <span className="syntax-string">&apos;TypeScript&apos;</span>],
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;backend: [
              <span className="syntax-string">&apos;Node.js&apos;</span>,{" "}
              <span className="syntax-string">&apos;FastAPI&apos;</span>],
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;data: [
              <span className="syntax-string">&apos;MongoDB&apos;</span>,{" "}
              <span className="syntax-string">&apos;PostgreSQL&apos;</span>]
            </li>
            <li>
              &nbsp;&nbsp;{"}"},
            </li>
            <li>
              &nbsp;&nbsp;status:{" "}
              <span className="syntax-string">&apos;Open to opportunities&apos;</span>
            </li>
            <li>{"}"};</li>
          </ol>
        </div>
      </div>

      <aside className="stack-card" aria-label="Core technology stack">
        <p>Core stack</p>
        <ul>
          {stack.map(({ name, icon: Icon }) => (
            <li key={name}>
              <Icon aria-hidden="true" size={17} strokeWidth={1.6} />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
