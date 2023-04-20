/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/sd3osdoco/**",
      },
    ],
  },
  env: {
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
    IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_AUTH_ENDPOINT: process.env.IMAGEKIT_AUTH_ENDPOINT,
    API_DOMAIN: process.env.API_DOMAIN,
  },
};

module.exports = nextConfig;
