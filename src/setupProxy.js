const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://onedaypocket.shop:443/',
            changeOrigin: true,
            secure: true, // HTTPS라면 true
            pathRewrite: {
                '^/api': '', // "/api/auth/login" → "/auth/login"
            },
        })
    );
};
