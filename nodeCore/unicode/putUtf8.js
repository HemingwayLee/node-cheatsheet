const fs = require('fs');

fs.appendFile("utf8doc.txt", '\u0061\u030A', function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
}); 
