const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://gambti.ap-northeast-2.elasticbeanstalk.com/",
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
  );
};