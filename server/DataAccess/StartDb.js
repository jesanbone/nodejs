var mongoose = require('mongoose');

var url = 'mongodb://localhost/Analytics';
module.exports = {
	startMongo :function (){mongoose.connect(url,function(err){
	  if (err){console.log('ERROR HERE DK');throw err;}
	  console.log('Connection from mongoose.connect');
	 
	 // User.getUserByUserNamePwdOrgID({orgid:'163',userName:'darshankhamar123@gmail.com',password:'darshan'});
	});
	}
}
