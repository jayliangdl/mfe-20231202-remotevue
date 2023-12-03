const { merge } = require('webpack-merge')

module.exports = (envVars) => {
  const { env } = envVars;
  const commonConfig = require('./webpack.common.js');
  const envConfig = require(`./webpack.${env}.js`);
  console.log(JSON.stringify(envConfig['webpackConfig']));
  const config = merge(commonConfig(envConfig), envConfig['webpackConfig']);
  return config;
}