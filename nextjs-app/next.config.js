/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
    SHOPIFY_ACCESS_TOKEN: process.env.SHOPIFY_ACCESS_TOKEN,
    SHOPIFY_ADMIN_API_ACCESS_TOKEN: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
    SHOPIFY_STORE_NAME: process.env.SHOPIFY_STORE_NAME,
  }
}

module.exports = nextConfig
