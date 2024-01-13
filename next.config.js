/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: {
  //     remotePatters: [
  //       {
  //         protocol: "https",
  //         hostname: "",
  //       },
  //     ],
  //   },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
