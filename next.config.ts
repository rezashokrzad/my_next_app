import type { NextConfig } from 'next'
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'my_next_app'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  // trailingSlash: true, // enable if assets 404
}
export default nextConfig;
