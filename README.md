# Sample code
* hello
* env
  * use default library (e.g., dotenv)

# What is Node.js?
* It is a web application framework built on Google JavaScript V8 Engine
* It is single threaded, asynchronous (non-blocking IO) and event driven (fast)

# Google V8 Engine

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

Node.js is single-threaded but it support concurrency via concept of event loop and callbacks. It uses async function calls to maintain the concurrency.

It does not use system threads, but instead uses the V8 engine along with the libuv library for multi-threading through asynchronous callbacks.

The user script in javascript is executed in one thread but all IO operations are natively handled by the engine concurrently. The engine keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.

As the result, more requests are handled in parallel.

# Asynchronous API (Non-blocking IO)

When calling Non-blocking IO API, we need to put a callback function to it. An application can do other things while waiting for an IO operation is completed. Once IO operation is completed, the callback function will be invoked. (e.g., nodejs non-blacking IO APIs)

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

# What is npm?

* npm stands for Node Package Manager
* It is like Ivy (dependency manager) in JVM language. By the way, maven is build tool + dependency manager

Check installed packages

```
npm ls
```

By default, Install all modules listed as dependencies in `package.json`

```
npm install
```

Install a specific package
```
npm install web3
```

How to update a dependency using npm? Change `Package.json` and run `npm update`

## npm global and local installation? 

Packages/dependencies are stored in `<user-directory>/npm` directory

```
npm install express -g
``` 

Packages/dependencies are stored in local `node_modules` folder
```
npm install express
```

# What is package.json?

It is used to define the properties of a package.

## version in package.json

`^1.2.3` will match any `1.x.x` release including `1.3.0`, but will hold off on `2.0.0`.

`~1.2.3` will match all `1.2.x` versions but will miss `1.3.0`.

## Do I commit the package-lock.json file? Yes.

It will cause a lot of noise or conflict when seeing the diff. But the benefits are:

* Guarantee exact same version of every package
* It improves the installation process

We may use `^1.2.3` in your package.json, but we can't ensure each time `npm install` will pick up the same version in the dev machine and in the build server, especially those indirect dependency packages. `package-lock.json` will ensure that.

## Create package.json file

```
npm init
```

## Install packages described in package.json file

```
npm install
```

# Tips
* [require and import](https://blog.niclin.tw/2019/10/03/nodejs-require-vs-es6-import-export/)

# Reference
## Comparison  
https://www.similartech.com/compare/nodejs-vs-php  
https://www.similartech.com/compare/django-vs-nodejs  
https://www.slideshare.net/brikis98/nodejs-vs-play-framework  

## Misc  
https://strongloop.com/strongblog/node-js-is-faster-than-java/  
https://blog.risingstack.com/node-hero-async-programming-in-node-js/  
http://voidcanvas.com/node-vs-browsers/  
https://www.tutorialspoint.com/nodejs/nodejs_interview_questions.htm  
https://stackoverflow.com/questions/16974557/why-is-node-js-not-suitable-for-heavy-cpu-apps  

