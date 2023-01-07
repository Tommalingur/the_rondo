const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/therondobackend",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7199',
        secure: false
    });

    app.use(appProxy);
};
