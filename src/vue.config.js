module.exports = {
    devServer: {
        proxy: {
            '^/api':{
                target: 'http://localhost:5000/tasks',
                changeOrigin: true,
                logLevel: 'debug',
                pathWrite: { '^/api': '/' },
            },
        }
    }

}