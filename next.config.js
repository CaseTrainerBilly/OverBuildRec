/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/OverBuildRec",
  assetPrefix: "/OverBuildRec/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;