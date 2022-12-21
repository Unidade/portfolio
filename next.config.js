/**
 * @type {import('next').NextConfig}
 */

// Github Pages config
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  // Necessary to build on GitHub Pages
  assetPrefix: assetPrefix ? assetPrefix : undefined,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
