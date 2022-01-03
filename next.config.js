const withImages = require('next-images');
module.exports = withImages({
  images: {
    disableStaticImages: true
  },
  webpack(config, options) {
    return config;
  }
});
