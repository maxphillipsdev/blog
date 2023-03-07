/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;
