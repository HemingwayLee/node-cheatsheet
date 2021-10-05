# How to create
```
npm init
```

# How to publish
## login into npm registry
```
npm adduser
```

Result
```
Username: ywlee
Password: 
Email: (this IS public) coherence0815@gmail.com
Logged in as ywlee on https://registry.npmjs.org/.
```

## check user
```
whoami
```

## Publish
```
npm run build
npm publish
```

## Check token
```
npm token ls
```

# Note
* source code is in `src` folder
* `uglifyjs` is used for minifying the source code
* `dist` folder is used for publish
  * only the minified code will be published (it is not necessary)
* `files` entry in package.json is used for publishing
* `main` entry in package.json should be pointing to `dist` folder

## TODO
* use `webpack` instead of `uglifyjs`
* add `test` folder


