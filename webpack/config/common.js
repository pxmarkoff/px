const plugins = require('../plugins');
const rules = require('../rules');

function commonConfig(directories) {
  return {
    output: {
      path: directories.BUILD_DIR,
      publicPath: '/',
    },
    plugins,
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': directories.APP_DIR,
      },
    },
    module: {
      rules,
    },
  };
}

module.exports = commonConfig;
