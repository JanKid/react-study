var webpack = require("webpack")
var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // entry: "./src/main.js",
  entry: [
    'webpack-hot-middleware/client?noInfo=true&reload=true',
    './src/main.js'
  ],
  output: {
    filename: "./dist/bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  // 使用webpack-dev-servar 启动时候需要加
  // devServer: {
  //   port: 3000,
  //   hot: true,
  //   contentBase: path.join(__dirname, 'dist')
  // },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
     
      options: {
        presets: ['es2015','react'],
      
      }
    }]
  },
  plugins: [
      new HtmlWebpackPlugin({ filename:'index.html', template:'index.html',inject:true }), 
      new webpack.HotModuleReplacementPlugin()]

}