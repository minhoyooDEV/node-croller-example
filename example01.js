var casper = require('casper').create();

casper.start();

casper.open('https://github.com/minhoyooDEV/');

casper.then(function() {
    casper.capture("sc.png");
});

casper.run();