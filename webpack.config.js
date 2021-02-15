const path = require('path');

const { merge } = require('webpack-merge');

const commonConfig = require('./webpack/config/common');
const developmentConfig = require('./webpack/config/development');
const productionConfig = require('./webpack/config/production');

const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist');

const directories = {
  APP_DIR,
  BUILD_DIR,
};

module.exports = (env) => {
  return env.development
    ? merge(commonConfig(directories), developmentConfig(directories))
    : env.production
    ? merge(commonConfig(directories), productionConfig(directories))
    : new Error('No matching configuration was found!');
};
