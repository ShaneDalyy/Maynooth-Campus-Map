const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', 
    createProxyMiddleware({
      target: 'https://www.maynoothuniversity.ie',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', 
      },
    })
  );
};