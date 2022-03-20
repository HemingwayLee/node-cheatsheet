const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

// app.engine('html', me())
// app.set('view engine', 'html')
// app.set('views', __dirname + '/views')

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function(req, res){
  const data = {
    hello: 1,
    world: 2
  } 
  res.render('aaa.html', data)
})

app.listen(3000, () => {
  console.log('server is running and listen to port 3000')
})


