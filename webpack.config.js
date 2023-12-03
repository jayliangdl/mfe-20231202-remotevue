
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  output: {
    publicPath: "http://localhost:8281/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },

  mode: 'development',
  entry: path.resolve(__dirname, './src/index.ts'),  //项目入口
  devServer: {
    port: 8281,
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
      // {
      //   test: /\.vue$/,
      //   loader: "vue-loader",
      // },
      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     "babel-loader",
      //     {
      //       loader: "ts-loader",
      //       options: {
      //         transpileOnly: true,
      //         appendTsSuffixTo: ["\\.vue$"],
      //         happyPackMode: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(css|s[ac]ss)$/i,
      //   use: ["style-loader", "css-loader", "postcss-loader"],
      // },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true, // 如果您想使用选项 API，请设置为 true
      __VUE_PROD_DEVTOOLS__: false // 通常在生产环境中应该设置为 false
    }),
    new ModuleFederationPlugin({
      name: "hostvue",
      filename: "remoteVueEntry.js",
      remotes: {
        // 'remotevue-mf': `remotevue@http://localhost:8282/remoteVueEntry.js`,
        'remote-mf': `remote@http://localhost:8082/remoteEntry.js`,
      },
      exposes: {},
    }),
  ]
};
