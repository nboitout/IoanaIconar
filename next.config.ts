import type { NextConfig } from "next";

const config: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/ro", permanent: false }];
  },
};

export default config;
