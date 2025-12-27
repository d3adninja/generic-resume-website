import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/generic-resume-website',
  images: {
    unoptimized: true,
  },
};

// export default withPWA(nextConfig);
export default nextConfig;
