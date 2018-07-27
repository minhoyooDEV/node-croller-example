var casper = require('casper').create({verbose: false, logLevel: 'debug'});
var config = require('./config').config;

var url = config.loginUrl;
var loginOption = {};
loginOption[config.idFormName] = config.id;
loginOption[config.passwordFormName] = config.password;
var today = new Date;
casper.start();

casper.open(url);
// this.echo('Today: ' + today);

casper.then(function () {
	this.echo('One Page: ' + this.getTitle());
  casper.fill(config.loginForm, loginOption, true)
});

// casper.then(function () {
// 	casper.wait(2000);
// 	casper.capture('sc6_01_'+ Date.now() +'.png', {
// 		top: 0, left: 0, width: 1024, height: 768
// 	})
// });

casper.thenOpen(config.checkUrl, function() {
	this.echo('Second Page: ' + this.getTitle());
});


casper.then(function () {
	casper.wait(3000);
	var path = config.checkForm;
	if (casper.exists(path)) {
		casper.mouseEvent('click', path);
	}
});

// casper.then(function () {
// 	casper.capture('sc6_02_'+ Date.now() +'.png', {
// 		top: 0, left: 0, width: 1024, height: 2000
// 	})
// });


casper.run();
