/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Doctors-Site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Doctors-Site/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
