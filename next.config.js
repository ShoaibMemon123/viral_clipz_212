/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/zali56',
        destination: 'https://vercel.com/guides/wordpress-with-vercel',
        permanent: true,
      }
      }
}
