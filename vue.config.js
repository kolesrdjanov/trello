module.exports = {
  publicPath: '/',
  chainWebpack: config => config.optimization.minimize(true),
  productionSourceMap: false
}
