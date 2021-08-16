var typeorm = require("typeorm")
var entitySchema = typeorm.EntitySchema

var express = require('express')
var app = express()

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const name = process.env.DB_NAME
const user = process.env.DB_USER
const pass = process.env.DB_PASS

typeorm.createConnection({
  type: "mysql",
  host: host,
  port: port,
  username: user,
  password: pass,
  database: name,
  synchronize: true,
  entities: [
    new entitySchema(require("./entity/Category")),
  ]
}).then(function (connection) {
  var category = {
    name: "TypeScript"
  }

  var cateRepo = connection.getRepository("Category")
  cateRepo.save(category)
    .then(function(savedCate) {
      console.log("Post has been saved: ", savedCate)
      console.log("Now lets load all categories: ")
      return cateRepo.find()
    })
    .then(function(allCate) {
      console.log("All categories: ", allCate)
    })
}).catch(function(error) {
  console.log("Error: ", error)
})

app.get('/', function(req, res) {
  var connection = typeorm.getConnection()
  var cateRepo = connection.getRepository("Category")
  cateRepo.find().then(function(allCate) {
    console.log("All rows: ", allCate)
    res.status(200).send(`See console output to check all categories`)
  }) 
})

app.listen(3000)
