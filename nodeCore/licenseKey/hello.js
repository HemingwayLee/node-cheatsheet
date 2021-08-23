var licenseKey = require('license-key-gen')

var userInfo = {
  company:"webisto.tech",
  street:"123 licenseKey ave", 
  city:"city/town", 
  state:"State/Province", 
  zip:"postal/zip"
}

// The format must not be changed
var licenseData = {
  info: userInfo, 
  prodCode: "LEN100120", 
  appVersion:"1.5", 
  osType:'IOS8'
}

try {
  var encrypted = licenseKey.createLicense(licenseData)
  
  // DOESN'T work, it can not be arbitrary json
  // var encrypted = licenseKey.createLicense(userInfo)
  console.log(encrypted)
} catch(err) {
  console.log(err)
}


try {
  var decrypted = licenseKey.validateLicense(licenseData, encrypted.license)
  
  // DOESN'T work, it can not be arbitrary json
  // var decrypted = licenseKey.validateLicense(userInfo, encrypted.license)
  console.log(decrypted)
} catch(err) {
  console.log(err)
}
    
