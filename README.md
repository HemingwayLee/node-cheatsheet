# What is Node.js?
* It is a web application framework built on Google JavaScript V8 Engine
* It is Asynchronous(non-blocking IO) and Event Driven (fast)

# Google V8 Engine

Base on V8, we can run javascript on our local machine.

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
But thread is heavy, that's why Node.js use `event loop`

# What is `event loop`

It does not use system threads, but instead uses the V8 engine along with the libuv library for multi-threading through asynchronous callbacks.

The user script in JS is executed in one thread but all IO operations are natively handled by the engine concurrently.

As the result, more requests are handled in parallel.

# Reference
## Comparison

https://www.similartech.com/compare/nodejs-vs-php

https://www.similartech.com/compare/django-vs-nodejs

https://www.slideshare.net/brikis98/nodejs-vs-play-framework

## Misc

https://strongloop.com/strongblog/node-js-is-faster-than-java/

https://blog.risingstack.com/node-hero-async-programming-in-node-js/
