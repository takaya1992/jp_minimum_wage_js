module.exports = {
  entry: {
    'jp_minimum_wage': './src/jp_minimum_wage.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader', 
        query:{
          presets: ['es2015'],
          plugins: ['transform-es2015-modules-umd']
        }
      }
    ],
  },
  devtool: 'source-map'
};
