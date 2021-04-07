# What is Node.js?
* It is a web application framework built on Google JavaScript V8 Engine
* It is `single threaded`, `asynchronous` (non-blocking IO) and event driven (fast)

## Google V8 Engine
Base on V8, we can run javascript on our local machine

* Build a web server (e.g., express)
* Build utilities (e.g., gulp, grunt, ...)

# What's the difference between JavaScript and Node.js?
* window object -> global object
* document object > process object

# Why Node.js is fast
A classic web server is thread-per-connection

```cpp
int server = socket();
bind(server, 80);
listen(server);

//accept is a system call, it can block
while (int connection = accept(server)) {
    pthread_create(doSomething, connection);
}

//if we start reading and writing on that socket, we can not accept any more connection.
// that's why we need to pass it to another thread.
void doSomething(int connection) {
    char buffer[4096];
    while (int size = read(connection, buffer, sizeof(buffer))) {
        write(...);
    }
}
```
But thread is heavy, that's why Node.js use `event loop`. It can service much more requests than traditional HTTP server (e.g., Apache HTTP Server)

# What is `event loop`
Node.js is single-threaded but it supports concurrency via event loop and callbacks. It uses async function calls to maintain the concurrency.

It does not use system threads, but instead uses the V8 engine  with the libuv library for multi-threading.

The user javascript is executed in one thread but all IO operations are natively handled by the engine concurrently. The engine keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.

As the result, more requests are handled in parallel.

# Asynchronous API (Non-blocking IO)
When calling `Non-blocking IO API`, we put a callback function to it. An application can do other things while waiting for an IO operation is completed. Once IO operation is completed, the callback function will be invoked. (e.g., nodejs non-blacking IO APIs)

`fs module` provides both synchronous as well as asynchronous methods.

* Blocking IO (Wait for some I/O operations to be completed)
```javascript
const fs = require('fs'); 
const data = fs.readFileSync('/file.md'); // blocks here until file is read
```

* Non-blocking IO (a callback function need to be provided)
```javascript
const fs = require('fs'); 
fs.readFile('/file.md', (err, data) => { 
  if (err) throw err; 
});
```
