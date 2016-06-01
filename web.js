var express = require('express');
var app = express();

app.set('port', (+process.env.PORT || 8000));

var server = require('http').Server(app);
var io = require('socket.io')(server);
require('global-state')(io);

if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require("webpack-dev-middleware");
  var webpack = require("webpack");

  const config = require('./webpack.config.js');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
  }));
}

app.use(express.static(__dirname + '/public'));

server.listen(app.get('port'), function () {
  console.log('Game on port ' + app.get('port'));
});
