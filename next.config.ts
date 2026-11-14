import type { NextConfig } from "next";

// Static export for GitHub Pages (massidentitylabs.github.io, served from the root).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
