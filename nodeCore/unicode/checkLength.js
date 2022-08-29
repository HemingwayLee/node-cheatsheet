const fs = require('fs');

// var regexSymbolWithCombiningMarks = /(\P{Mark})(\p{Mark}+)/gu;
// function countSymbolsIgnoringCombiningMarks(string) {
//   var stripped = string.replace(regexSymbolWithCombiningMarks, function($0, symbol, combiningMarks) {
//     return symbol;
//   });
//   return stripped.length === string.length;
// }

function toPoint(str) {
  let res = '';
  for (var i=0; i<str.length; ++i) {
    res += `${str.codePointAt(i)}`;
    if (i != str.length-1) {
      res += ' '
    }
  }

  return res
}

function toCode(str) {
  let res = '';
  for (var i=0; i<str.length; ++i) {
    res += `0x${str.codePointAt(i).toString(16).toUpperCase()}`;
    if (i != str.length-1) {
      res += ' '
    }
  }

  return res
}

fs.readFile('utf8doc.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  let utf8Encode = new TextEncoder();
  const lines = data.split('\n');
  for (var i=0; i<lines.length; ++i) {
    console.log({ 
      "char": lines[i],
      "length": lines[i].length,
      // "array": utf8Encode.encode(lines[i]),
      "point": toPoint(lines[i]),
      "code": toCode(lines[i]),
      // "is_combine": countSymbolsIgnoringCombiningMarks(lines[i])
    })
  }
});
