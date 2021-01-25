var express = require('express');
var app = express();

app.get('/hello', function(req, res){
  var rand = Math.random();
  res.send("Hello, " + rand.toString());
});

//it will also block the request from hello
app.get('/hola', function(req, res){
  var total = 0;
  for (var k = 1; k < 25; ++k) {
    for (var j = 1; j < 10000; ++j) {
      for (var i = 1; i < 10000; ++i) {
        total = Math.sqrt(Math.random());
      }
    }
  }

  res.send("Hola, " + total.toString());
});

app.listen(3000);
