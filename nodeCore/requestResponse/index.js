const request = require('request');

request('https://biglegsrabbit.blogspot.jp/2017/09/3_28.html', 
  function (error, response, body) {
    console.log('body:', body);
  }
);

