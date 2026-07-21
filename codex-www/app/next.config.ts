import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@project-codex/queue-contracts"],
};

export default nextConfig;
