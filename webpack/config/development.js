const path = require('path');

function developmentConfig(directories) {
  return {
    devServer: {
      contentBase: directories.BUILD_DIR,
      hot: true,
      historyApiFallback: true,
    },
    devtool: 'source-map',
    entry: path.resolve(directories.APP_DIR, 'index.tsx'),
    mode: 'development',
    optimization: {
      runtimeChunk: true,
      splitChunks: { chunks: 'all' },
    },
    output: { filename: 'js/[name].js' },
  };
}

module.exports = developmentConfig;
