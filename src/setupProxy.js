const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://port-0-gambti-12fhqa2llo8qkrut.sel5.cloudtype.app/",
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
  );
};