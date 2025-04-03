import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "raw.githubusercontent.com", "vegapodhyperloop.in"],
  },
};

export default withNextVideo(nextConfig);
