const idx = require('./index.js');

test('adds 1 + 2 to equal 3', () => {
  expect(idx.bar(1, 2)).toBe(3);
});

test('say hello world', () => {
  expect(idx.foo()).toBe("hello, world");
});


