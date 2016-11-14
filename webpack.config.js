var webpack = require('webpack');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/app.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]

    },
    {
     test: /\.(png|jpg|)$/,
     loader: 'url-loader?limit=200000'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
	  hot: true,
    historyApiFallback: true
  },
  plugins: [
   new webpack.ProvidePlugin({
     'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
   })
 ]
};
