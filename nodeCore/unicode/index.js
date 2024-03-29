const punycode = require('punycode');

var regexSymbolWithCombiningMarks = /(\P{Mark})(\p{Mark}+)/gu;

function countSymbolsIgnoringCombiningMarks(string) {
  var stripped = string.replace(regexSymbolWithCombiningMarks, function($0, symbol, combiningMarks) {
	return symbol;
  });
  
  return punycode.ucs2.decode(stripped).length;
}

function countSymbolsPedantically(theStr) {
  var normalized = theStr.normalize('NFC');
  return punycode.ucs2.decode(normalized).length;
}

function countSymbols2(theStr) {
  return punycode.ucs2.decode(theStr).length;
}

function countSymbols(theStr) {
  return Array.from(theStr).length;
}


const str = '禰󠄀豆子に襲わ';
console.log(str)
console.log(`length: ${str.length}`);
console.log(`count array from: ${countSymbols(str)}`)
console.log(`count ucs2 decode: ${countSymbols2(str)}`)
console.log(`count normalized: ${countSymbolsPedantically(str)}`)
console.log(`count remove combine: ${countSymbolsIgnoringCombiningMarks(str)}`)

// codePointAt shows the whole number
// charCodeAt shows only 0 to 65535, 
//  and it show the first part if number greater than 65535
for (var i=0; i<str.length; ++i) {
  console.log({
    "char": str[i], 
    "point": str.codePointAt(i), 
    "code":str.charCodeAt(i)
  });
}

console.log("----- use for of loop -----")
for (const symbol of str) {
  console.log({
	  "char": symbol,
    "point": symbol.codePointAt(0), 
    "code":symbol.charCodeAt(0)
	})
}


let utf8Encode = new TextEncoder();
console.log(utf8Encode.encode("a"));
console.log(utf8Encode.encode("禰󠄀"));
console.log(utf8Encode.encode("豆"));
console.log(utf8Encode.encode("子"));
console.log(utf8Encode.encode("に"));
console.log(utf8Encode.encode("襲"));
console.log(utf8Encode.encode("わ"));


const uint8array = new TextEncoder().encode("a禰󠄀豆子に襲わ");
console.log(uint8array)
