/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //incase use of remote images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
      },
    ],
  },
};

module.exports = nextConfig;
