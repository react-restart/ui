const path = require('path');

module.exports = () => ({
  name: 'webpack-plugin',
  configureWebpack(_, isServer, { getJSLoader }) {
    return {
      devtool: 'inline-cheap-module-source-map',

      resolve: {
        alias: {
          '@restart/ui': path.resolve(__dirname, '../../src'),
        },
        extensionAlias: {
          '.js': ['.ts', '.tsx', '.js'],
        },
      },
    };
  },
});
