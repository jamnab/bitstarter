var express = require('express');

 var app = express.createServer(express.logger());

var buffer = new Buffer(12);
buffer.write("Hello World", "utf-8");
var hello = buffer.toString("utf-8", 0, 12);

var fs = require("fs");
var data = fs.readFileSync("/bitstarter/index.html", utf-8);

 app.get('/', function(request, response) {
  response.send(hello + ' from ' + data);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
