// Nodejs encryption with CTR
const crypto = require('crypto')

// const algorithm = 'aes-256-cbc'
// const key = crypto.randomBytes(32)
const algorithm = 'aes-128-cbc'
const key = crypto.randomBytes(16)

const iv = crypto.randomBytes(16)

function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
  let encrypted = cipher.update(text)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return encrypted.toString('hex')
}

function decrypt(text) {
  let encryptedText = Buffer.from(text, 'hex')
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv)
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}

var hw = encrypt("Some serious stuff")

console.log(hw)
console.log(decrypt(hw))
