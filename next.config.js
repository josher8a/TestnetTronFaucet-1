/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_PRIVATE_KEY: process.env.REACT_APP_PRIVATE_KEY,
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_APP_TOKEN_ADDRESS: process.env.REACT_APP_TOKEN_ADDRESS,
  }
}

module.exports = nextConfig
