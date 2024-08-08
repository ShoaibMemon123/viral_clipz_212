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
        source: '/',
        destination: 'https://hdmediaa.com/sfgdfgs/', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
