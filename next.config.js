/**
 * @type {import('next').NextConfig}
 */

// Github Pages config
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = 'Unidade.github.io'

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  // Necessary to build on GitHub Pages
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
