const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // server: {
  //
  //   proxy: {
  //     '/api': 'http://localhost:8080'
  //   },
  //
  // },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:3003',
        ws: true,
        changeOrigin: true
      },

    }
  }
})
