var express = require('express')
var app = express()

var mysql = require('mysql')
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const name = process.env.DB_NAME
const user = process.env.DB_USER
const pass = process.env.DB_PASS
console.log(host)
console.log(port)
console.log(name)
console.log(user)
console.log(pass)

var connection = mysql.createConnection({
  host: host,
  user: user,
  password: pass
});

connection.connect()

app.get('/', function(req, res) {
  
  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err
    res.status(200).send(`The solution is: ${rows[0].solution}`)
  })

  // connection.end()
});

app.listen(3000)

