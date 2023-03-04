const { createSecureHeaders } = require('next-secure-headers')

const NODE_ENV = process.env.NODE_ENV
const CUSTOM_ENV = process.env.CUSTOM_ENV

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // next-secure-headers for Content Security Policy etc.
  // https://www.npmjs.com/package/next-secure-headers
  // https://oslavdev.medium.com/protect-your-next-js-app-with-security-headers-7f70f4a95d63
  async headers() {
    if (CUSTOM_ENV === 'local') {
      return []
    }
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({}),
      },
    ]
  },
}

module.exports = nextConfig
