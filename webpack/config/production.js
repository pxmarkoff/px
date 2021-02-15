const path = require('path');

const { dependencies } = require('../../package.json');

function productionConfig(directories) {
  return {
    entry: {
      bundle: path.resolve(directories.APP_DIR, 'index.tsx'),
      vendorReactBase: ['react', 'react-dom'],
      vendorReactRouter: ['react-router-dom'],
      vendorOthers: Object.keys(dependencies).filter((el) => {
        if (el === 'react-icons') return el;
        return !el.includes('react');
      }),
    },
    mode: 'production',
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    output: { filename: 'js/[name].[chunkhash].js' },
  };
}

module.exports = productionConfig;
