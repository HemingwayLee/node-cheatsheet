var jwt = require('jsonwebtoken')

var token = jwt.sign({ foo: 'bar' }, 'shhhhh')
console.log(token)


jwt.verify(token, 'shhhhh', function(err, decoded) {
  console.log(decoded)
})


function parseJwtBody (body) {
  var base64 = body.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  return JSON.parse(jsonPayload)
}

// it can be decoded without secret key
console.log(parseJwtBody(token.split('.')[1]))

