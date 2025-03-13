module.exports = {
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/login',
      },
    ];
  },
};