/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false, // Using pages router for simplicity in PoC
  },
  // Configure environment variables available on the client-side
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000/governance',
    NEXT_PUBLIC_API_ENV: process.env.NEXT_PUBLIC_API_ENV || 'development',
  },
  // If you use Tailwind CSS, ensure it's configured correctly
  // webpack: (config, { isServer }) => {
  //   // Further customize webpack config if needed
  //   return config;
  // },
};

module.exports = nextConfig;
