
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.ts'),  //项目入口
  devServer: {
    port: 8282,
  },
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
      // 其他规则...
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
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
        './MyVueButton':'./src/MyVueButton.vue'
      },
      shared: require("./package.json").dependencies,9
    }),
  ]
};
