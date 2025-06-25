const path = require('path');

module.exports = () => ({
  name: 'webpack-plugin',
  configureWebpack(_, isServer, { getJSLoader }) {
    return {
      devtool: 'inline-cheap-module-source-map',

      module: {
        rules: [
          {
            test: /\.(j|t)sx?$/,
            include: [path.resolve(__dirname, '../../src')],
            use: [
              getJSLoader(
                isServer,
                path.resolve(__dirname, '../babel.config.js'),
              ),
            ],
          },
        ],
      },
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
