function foo() {
  return "from foo";
}

exports.printMe = function() {
  return foo();
}


