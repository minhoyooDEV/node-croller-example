var casper = require('casper').create({verbose: true, logLevel: 'debug'});

var url = 'https://github.com/login';
var id = '';
var pw = '';


casper.start();

casper.open(url);


casper.then(function () {
  casper.fill('#login form', {
    login: id,
    password: pw
  }, true)
});

casper.then(function () {
  this.wait(200, function () {

    var getCounter = function () {
      return document.querySelector('#your_repos .Counter').innerText;
    }
    console.log('getCounter:', this.evaluate(getCounter));

  })
})

casper.run();