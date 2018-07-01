const path = require('path')

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  target: 'node',
}
