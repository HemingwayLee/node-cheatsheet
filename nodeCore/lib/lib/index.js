function foo() {
  return "from foo";
}

exports.printMe = function() {
  console.log(foo());
}


