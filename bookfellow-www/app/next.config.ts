import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@bookfellow/queue-contracts"],
};

export default nextConfig;
