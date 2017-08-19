var express = require("express")
var opn = require('opn')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var wpDevMiddleware = require("webpack-dev-middleware")
var wpHotMiddleware = require("webpack-hot-middleware")
var port = 3000

var app = express()

var compiler= webpack(webpackConfig)

var devMiddleware = wpDevMiddleware(compiler,{ noInfo:true,publicPath:'/' })
var hotMiddleware = wpHotMiddleware(compiler)


var uri = 'http://localhost:'+port


// compiler.plugin('compilation',function(compilation) {
// 	compilation.plugin('html-webpack-plugin-after-emit',function(data,cb) {
// 		hotMiddleware.publish({action:'reload'})
// 		cb()
// 	})
// })

app.use(devMiddleware)

app.use(hotMiddleware)

devMiddleware.waitUntilValid(function(){
	opn(uri)	
})

var server = app.listen(port)

app.use(function(req,res) {
	
})

