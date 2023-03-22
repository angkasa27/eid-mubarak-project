/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upcdn.io",
        port: "",
        pathname: "/FW25b5A/**",
      },
    ],
  },
};

module.exports = nextConfig;
