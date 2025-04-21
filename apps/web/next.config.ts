import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  turbopack: {
  },
  experimental: {
    viewTransition: true,
    authInterrupts: true,
    serverActions: {
      bodySizeLimit: '30mb',
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
};


export default createNextIntlPlugin('./lib/i18n.ts')(nextConfig);