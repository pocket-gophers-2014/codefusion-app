var express = require('express');
var application = express();

application.configure(function() {
  application.use(express.static(__dirname));
  application.use(express.logger('dev'));
  application.use(express.bodyParser());
});

// application.get('*', function() {
//   res.sendfile('index.html')
// })

application.listen(8080)
console.log("---------- App listening on port 8080 ----------")