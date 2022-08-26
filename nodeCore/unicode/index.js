
const str = 'a禰󠄀豆子に襲わ';
console.log(str)
console.log(`length: ${str.length}`);
for (var i=0; i<str.length; ++i) {
  console.log(`${str[i]}, ${str.codePointAt(i)}, ${str.charCodeAt(i)}`);
}


let utf8Encode = new TextEncoder();
console.log(utf8Encode.encode("a"));
console.log(utf8Encode.encode("禰󠄀"));
console.log(utf8Encode.encode("豆"));
console.log(utf8Encode.encode("子"));
console.log(utf8Encode.encode("に"));
console.log(utf8Encode.encode("襲"));
console.log(utf8Encode.encode("わ"));

