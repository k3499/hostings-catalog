module.exports = {
    images: {
      formats: ['image/avif', 'image/webp'],
    },
    remotePatterns: [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337'
        },
        {
            protocol: 'https',
            hostname: 'api.besplatno-skin.com',
            port: ''
        },
      ],
  };