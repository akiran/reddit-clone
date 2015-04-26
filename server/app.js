var express = require('express');

var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// var webpack = require('webpack');
// var webpackMiddleware = require('webpack-dev-middleware');
var app = express();
var env = process.env.NODE_ENV || 'development';
var path = require('path')

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

app.use(logger('combined'));
app.use('/', express.static(path.join(__dirname, '../build')));
app.set('staticUrl', '');
// app.use(webpackMiddleware(webpack(require('../webpack.config.js')), {
//   publicPath: "/js/",
// }));

app.get('/*', function (req, res) {
  res.render('app');
});

app.listen(8000);