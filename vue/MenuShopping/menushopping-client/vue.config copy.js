module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.43.249:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
