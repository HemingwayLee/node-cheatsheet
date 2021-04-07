const express = require('express')
const app = express()
const me = require('mustache-express')

app.engine('html', me())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/', function(req, res){
  const data = {
    hello: 1,
    world: 2
  } 
  res.render('aaa', data)
})

app.listen(3000, () => {
  console.log('server is running and listen to port 3000')
})


