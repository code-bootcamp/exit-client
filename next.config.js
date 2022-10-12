/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KAKAO_MAP_API_KEY: process.env.KAKAO_MAP_API_KEY,
    KAKAO_LOCAL_API_KEY: process.env.KAKAO_LOCAL_API_KEY,
  },
};

module.exports = nextConfig;
