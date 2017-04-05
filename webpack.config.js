const webpack = require("webpack");

module.exports = {
  entry: {
    'jp_minimum_wage': './src/jp_minimum_wage.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    library: 'JpMinimumWage',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({sourceMap: true})
  ],
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader', 
        query: {
          presets: ['es2015']
        }
      }
    ],
  },
  devtool: 'source-map'
};
