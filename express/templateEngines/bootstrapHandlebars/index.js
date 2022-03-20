const { engine } = require('express-handlebars')
const express = require('express')
const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views')

app.get('/', function(req, res){
  const data = {
    hello: 1,
    world: 2
  } 
  res.render('dashboard', data)
})

app.get('/dashboard', function(req, res){
  const data = {
    hello: 1,
    world: 2
  } 
  res.render('dashboard', data)
})

app.get('/photos', function(req, res){
  const data = {
    hello: 1,
    world: 2
  } 
  res.render('photos', data)
})

app.get('/users', function(req, res){
  const data = {
    hello: 1,
    world: 2
  } 
  res.render('users', data)
})



app.listen(3000, () => {
  console.log('server is running and listen to port 3000')
})


