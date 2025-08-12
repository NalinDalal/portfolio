import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
    output: 'export' 
};
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  // Any other Next.js config here
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})

export default nextConfig;
