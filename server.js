var express = require('express');
var logfmt = require("logfmt");s
var port = process.env.PORT || 8080;
var app = express();

app.configure(function() {
  app.use(express.static(__dirname));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
});

app.get('*', function() {
  res.sendfile('index.html')
})

app.listen(port)
console.log("---------- App listening on port 8080 ----------")