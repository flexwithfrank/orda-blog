module.exports = {
  images: {
    domains: ["via.placeholder.com", "imagedelivery.net"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}
