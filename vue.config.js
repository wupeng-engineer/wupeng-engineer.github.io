const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    publicPath: './',
    assetsDir: 'static',
    lintOnSave: false,
    chainWebpack: (config) => {},
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production'
            let optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                return `${packageName.replace('@', '')}`
                            }
                        }
                    }
                },
                minimizer: [new UglifyPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true,
                            drop_debugger: false,
                            pure_funcs: ['console.log']
                        }
                    }
                })]
            }
            Object.assign(config, {
                optimization
            })
        } else {
            config.mode = 'development'
        }
        Object.assign(config, {
            resolve: {
                extensions: ['.js', '.vue', '.json', ".css", ".less"],
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@/views': path.resolve(__dirname, './src/views')
                }
            }
        })
    },
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            css: {},
            postcss: {},
            less: {}
        },
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 8081,
        https: false,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            // '/api': {
            //     target: 'http://localhost:8081',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/api': ''
            //     }
            // }
        }
    },
    pluginOptions: {}
}