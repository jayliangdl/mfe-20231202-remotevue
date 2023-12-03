
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const exposeURL = env['appConfig']['exposeURL']; 
  return {
    
    // output: {
    //   publicPath: exposeURL,
    // },

    resolve: {
      extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
    },

    mode: 'development',
    entry: path.resolve(__dirname, '..', './src/index.ts'),  //项目入口
    
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] },
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './src/index.html'),
      }),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // 如果您想使用选项 API，请设置为 true
        __VUE_PROD_DEVTOOLS__: false // 通常在生产环境中应该设置为 false
      }),
      new ModuleFederationPlugin({
        name: "remotevue",
        filename: "remoteVueEntry.js",
        remotes: {
        },
        exposes: {
          './MyVueButton':'./src/MyVueButton.vue',
          './VanillaMyVueButton':'./src/VanillaMyVueButton.ts'
        },
        // shared: require("./package.json").dependencies
      }),
    ]
  }
}
