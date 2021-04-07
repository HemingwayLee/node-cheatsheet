# Sample code
* hello
* env
  * use default library (e.g., dotenv)

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

# Change npm registry
## check current registry
```
npm config list
```

## set registry
```
npm set registry https://registry.npmjs.org
```

## use private registry
```
npm install --registry http://localhost:4873
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

