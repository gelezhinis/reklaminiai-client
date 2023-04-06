/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};

    return config;
  }
}

module.exports = nextConfig;
