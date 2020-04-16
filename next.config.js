const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
});
module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    };
  }
};