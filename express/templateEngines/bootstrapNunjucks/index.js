const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function(req, res){
  const data = {
    hello: 1,
    world: 2,
    pageid: 'dashboard'
  } 
  res.render('dashboard.html', data)
})

app.get('/dashboard', function(req, res){
  const data = {
    hello: 1,
    world: 2,
    pageid: 'dashboard'
  } 
  res.render('dashboard.html', data)
})

app.get('/photos', function(req, res){
  const data = {
    pageid: 'photos'
  } 
  res.render('photos.html', data)
})

app.get('/users', function(req, res){
  const data = {
    pageid: 'users'
  } 
  res.render('users.html', data)
})

app.listen(3000, () => {
  console.log('server is running and listen to port 3000')
})


