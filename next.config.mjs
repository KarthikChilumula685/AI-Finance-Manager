/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com", // Pinterest image CDN
      },
      {
        protocol: "https",
        hostname: "s.pinimg.com", // Pinterest assets (icons/scripts)
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
