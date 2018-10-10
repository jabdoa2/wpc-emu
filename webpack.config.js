'use strict';

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
  return {
    entry: './lib/emulator.js',
    optimization: {
      minimizer: [new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: true
        }
      })]
    },
    output: {
      filename: 'wpc-emu.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'WpcEmu',
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: [{
          loader: 'remove-debug-loader'
        }]
      }]
    }

  };
};
