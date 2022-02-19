/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI="mongodb+srv://xenofy23:Senpou_23@cluster0.rx3rj.mongodb.net/devotions?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
