const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // 프록시할 경로
        createProxyMiddleware({
          target: 'http://hoiks.store:3000', // 백엔드 서버의 주소
          changeOrigin: true,
        })
      );
};