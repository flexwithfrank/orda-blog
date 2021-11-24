module.exports = {
  images: {
    domains: ["via.placeholder.com", "imagedelivery.net"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog/1",
        permanent: true,
      },
    ];
  },
};
