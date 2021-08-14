const path = require('path');

module.exports = (env) => {
  return {
    mode: env.environment,
    entry: {
      index: './src/index.js'
    },
    devtool: 'inline-source-map',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname),
      clean: false
    }
  }
};