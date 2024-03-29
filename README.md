# Sample code
* hello
* env
  * use default library (e.g., dotenv)
* arg
  * command arguments
* lib
  * publish a package to public npm
  * download/install the package from public npm

# Node.js vs browser javascript
| browser javascript | Noed.js |
| --- | --- |
| basically used on the client-side | mostly used on the server-side | 
| able to access HTML DOM | not able to access HTML DOM |
| based on any engine (e.g., JS core in safari and Spidermonkey in firefox) | based on V8 engine (we control the environment) |
| no filesystem access | filesystem access |
| no package manager | npm package manager |

# NVM (Node Version manager)
* it allows you to use multiple versions of Node and without sudo
```
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
source ~/.nvm/nvm.sh
nvm install 0.9.0
nvm install 0.9.9
nvm use 0.9.0
node --version
#v0.9.0
nvm use 0.9.9
node --version
#v0.9.9
```

# Tips
* [require and import](https://blog.niclin.tw/2019/10/03/nodejs-require-vs-es6-import-export/)
* [nodejs modules shared between project](https://stackoverflow.com/questions/30027739/is-it-possible-to-have-a-node-modules-directory-shared-between-projects)
  * `ln -s node_modules`

# Reference
## Comparison  
https://www.similartech.com/compare/nodejs-vs-php  
https://www.similartech.com/compare/django-vs-nodejs  
https://www.slideshare.net/brikis98/nodejs-vs-play-framework  

## ORM
![orm](img/orm.png)

## ebook
[NodeJS Notes For Professionals](https://books.goalkicker.com/NodeJSBook/)

## Misc  
https://strongloop.com/strongblog/node-js-is-faster-than-java/  
https://blog.risingstack.com/node-hero-async-programming-in-node-js/  
http://voidcanvas.com/node-vs-browsers/  
https://www.tutorialspoint.com/nodejs/nodejs_interview_questions.htm  
https://stackoverflow.com/questions/16974557/why-is-node-js-not-suitable-for-heavy-cpu-apps  

