const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: [path.join(src, 'main.jsx')],
  output: {path: dist, filename: '[name].bundle.js'},
  devServer: {host: '0.0.0.0', contentBase: dist},
  module: {
    rules: [
      {test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader'}, {
        test: /\.(css|scss)$/,
        loader: ['style-loader/useable', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|otf|jpg|png|ttf|woff2?)$/,
        loader: 'url-loader',
        options: {limit: 8192}
      },
      {test: /\.glsl$/, loader: 'glsl-loader'},
      {test: /\.txt$/, loader: 'raw-loader'}
    ]
  },
  resolve: {extensions: ['.js', '.jsx']}
};
