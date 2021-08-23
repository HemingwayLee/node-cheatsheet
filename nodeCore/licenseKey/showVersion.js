var licenseKey = require('license-key-gen')

var userInfo = {
  company:"webisto.tech",
  street:"123 licenseKey ave", 
  city:"city/town", 
  state:"State/Province", 
  zip:"postal/zip"
}

for (var i=0; i<20; i++) {
  var licenseData = {
    info: userInfo, 
    prodCode: "code", 
    appVersion: `1.${i}.0`
  }

  try {
    console.log(`prodCode: ${licenseData.prodCode}, version: ${licenseData.appVersion}`);

    var encrypted = licenseKey.createLicense(licenseData)
    console.log(encrypted)

    var decrypted = licenseKey.validateLicense(licenseData, encrypted.license)
    console.log(decrypted)
  } catch (err) {
    console.log(err)
  }
}


