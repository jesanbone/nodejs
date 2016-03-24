var express = require('express'),
    bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	StartDatabaseLayer = require('./DataAccess/StartDb'),
    app = express();
var Event = require('./Models/event');
var platform = require('platform');
var analytics = require('analytics');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));

//app.use(allowCrossDomain);

app.get('/',function(req,res){
      res.sendFile(__dirname +'/1.html');
});



StartDatabaseLayer.startMongo();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


analytics.init(app,Event,platform);

process.on('uncaughtException', function (err) {
    if (err) console.log(err, err.stack);
});

//Local Connection 



app.listen(3000, function () {
    console.log("CustMgr Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
