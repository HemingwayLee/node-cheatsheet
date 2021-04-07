var assert = require('assert');
var idx = require('./index.js');

describe('Index', function() {
  describe('#foo()', function() {
    it('should return hello world', function() {
      assert.equal(idx.foo(), "hello, world");
    });
  });

  describe('#bar()', function() {
    it('should do adding correctly', function() {
      assert.equal(idx.bar(1, 2), 3);
    });
  });
});


