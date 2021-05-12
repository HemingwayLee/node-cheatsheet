# Start
* Run locally
```
npm start
```

* Run by docker
```
docker build -t myhttpserver .
docker run -it --rm -p 9999:9999 myhttpserver
```

* Note: does not even need to have `index.js`
* by default, http-server listen to 0.0.0.0


