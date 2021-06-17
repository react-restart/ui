const path = require('path');

module.exports = () => ({
  name: 'webpack-plugin',
  configureWebpack(_, isServer, { getBabelLoader }) {
    return {
      devtool: 'inline-module-source-map',

      module: {
        rules: [
          {
            test: /\.(j|t)sx?$/,
            include: [path.resolve(__dirname, '../../src')],
            use: [
              getBabelLoader(
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
      },
    };
  },
});
