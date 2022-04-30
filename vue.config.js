const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
        navigateFallback: '/index.html',
        runtimeCaching: [
            {
                urlPattern: new RegExp('^http://localhost:5000/tasks'),
                handler: 'NetworkFirst',
                options: {
                    networkTimeoutSeconds: 20,
                    cacheName: 'api-cache',
                    cacheableResponse: {
                        statuses: [0, 200]
                    }
                }
            }
        ]
    }
  },
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
 })
