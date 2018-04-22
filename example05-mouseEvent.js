var casper = require('casper').create({verbose: true, logLevel: 'debug'});

var url = 'https://github.com/login';
var id = '';
var pw = '^';


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
});

casper.then(function () {
  var path = '.mini-repo-list > li > a';
  if (casper.exists(path)) {
    casper.mouseEvent('click', path);
  }
  casper.wait(3000);
});

casper.then(function () {
  casper.capture('/Users/volumeismac/Documents/Crollers/CrollerExample/sc5'+ Date.now() +'.png', {
    top: 0, left: 0, width: 1024, height: 768
  })
});

casper.run();