module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/comics': { page: '/comics' },
      // Add more paths as needed
    };
  },
};