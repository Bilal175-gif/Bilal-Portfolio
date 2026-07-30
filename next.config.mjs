import { fileURLToPath } from "node:url";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/learning",
        destination: "/skills",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;
