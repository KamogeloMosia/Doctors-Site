/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages uses a subdirectory based on your repo name
  // Replace 'tailwind-landing' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/tailwind-landing' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  // Make sure the build works without server-side features
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
