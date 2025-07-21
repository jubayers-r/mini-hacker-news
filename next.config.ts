import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your config options here
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Use only during prototyping!
  },
};

export default nextConfig;