/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
