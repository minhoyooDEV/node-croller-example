var casper = require('casper').create();
var utils = require('utils');


var args = casper.cli.args;
if (args.length < 1) {
  casper.echo("USES");
  casper.echo("shot-tool URL [savepath]");
  casper.exit();
}

var savePath = "sc3.png";
var url = args[0];
if (args.length >= 2) {
  savePath = args[1];
}

casper.start();
casper.viewport(1024, 768);
casper.open(url);

casper.then(function () {
  this.capture(savePath, {
    top: 0, left: 0, width: 1400, height: 800
  })
});

casper.run();