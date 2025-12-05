import type { NextConfig } from "next";

// Check if we're building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === "true";
// If repo name is "username.github.io", use root path, otherwise use repo name
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "portfolio-modern";
const isUserPage = repoName?.endsWith(".github.io");
const basePath = isGithubPages && !isUserPage ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // GitHub Pages configuration
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? basePath : "",
  assetPrefix: isGithubPages ? basePath : "",
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true, // Always unoptimized for static export compatibility
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // React optimizations
  reactStrictMode: true,
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@react-three/fiber",
      "@react-three/drei",
      "swiper",
    ],
  },
  // Turbopack configuration (Next.js 16 uses Turbopack by default)
  turbopack: {},
};

export default nextConfig;
