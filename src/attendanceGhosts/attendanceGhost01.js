var casper = require('casper').create({verbose: false, logLevel: 'debug'});
var config = require('../../config.js').site01Config;

var url = config.loginUrl;
var loginOption = {};
loginOption[config.idFormName] = config.id;
loginOption[config.passwordFormName] = config.password;
var today = new Date;

casper.start();

casper.open(url);
// this.echo('Today: ' + today);

casper.then(function () {
	this.echo('Sin01: ' + this.getTitle()); // maybe protect DDOS.
	this.wait(10000, function () {
		this.echo('Sin02: ' + this.getTitle()); // maybe 출석체크.
		this.capture('sin02_' + Date.now() + '.png', {
			top: 0, left: 0, width: 1440, height: 2000
		});
		this.fill(config.loginForm, loginOption, true)
	});
	this.wait(1000, function () {
	//	wait redirect;
	});
});

casper.thenOpen(config.checkUrl, function () {
	this.echo('Sin03: ' + this.getTitle());
});


casper.then(function () {
	casper.wait(3000, function() {
		var path = config.checkForm;
		if (casper.exists(path)) {
			casper.mouseEvent('click', path);
		} else {

		}
	});
});

casper.then(function () {
	casper.capture('site01_01' + Date.now() + '.png', {
		top: 0, left: 0, width: 1440, height: 2000
	})
});


casper.run();
