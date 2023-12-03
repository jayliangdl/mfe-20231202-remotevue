module.exports = {
  /**webpack专属的配置放在这里*/
  webpackConfig:{
    mode: 'development',
    devServer: {
      hot:true
    },
    devServer: {
      port: 8282,
    },
    devtool: 'cheap-module-source-map',
    plugins : [

    ]
  },
  /**应用自己的配置放在这里*/
  appConfig:{
    exposeURL:"http://localhost:8282" /**注意是http://xxx:port  不是 http://xxx:port/  最后是没有 / 的 */
  }
}