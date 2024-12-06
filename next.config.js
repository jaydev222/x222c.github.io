/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/creative-agency-mvp' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/creative-agency-mvp' : '',
}

module.exports = nextConfig

