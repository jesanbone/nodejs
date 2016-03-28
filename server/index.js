var express = require('express'),
    bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	StartDatabaseLayer = require('./DataAccess/StartDb'),
    app = express();
var Event = require('./Models/event');

var analytics = require('analytics');

var path = require('path');
global.appRoot = path.resolve(__dirname).substr(0, path.resolve(__dirname).lastIndexOf("\\"));


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(appRoot + '/client'));

//app.use(allowCrossDomain);

console.log(appRoot);
app.get('/',function(req,res){
      res.sendFile(appRoot+'/client/1.html');
});



StartDatabaseLayer.startMongo();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


analytics.init(app,Event);

process.on('uncaughtException', function (err) {
    if (err) console.log(err, err.stack);
});

//Local Connection 



app.listen(3000, function () {
    console.log("CustMgr Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});