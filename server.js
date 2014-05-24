var express = require('express');
var logfmt = require("logfmt");
var app = express();

app.configure(function() {
  app.use(express.static(__dirname));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
});

app.get('*', function() {
  res.sendfile('index.html')
})

app.listen(8080)
console.log("---------- App listening on port 8080 ----------")