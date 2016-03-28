/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

exports.init = function(app,Event) {

app.post('/api/saveTraceElement', function(req,res)
{
	
    var EventObj = new Event({
      org:'',
      User_Name: '',
      Start_Date: '',
      End_Date: '',
	  Name: '',
	  Version: '',
	  Layout: '',
	  Os: '',
	  Description: '',
	  Manufacturer : '',
	  Product : ''
	  
    });
	
	//console.log("username : "+req.body.userName);
    EventObj.org		=	JSON.stringify(req.body.EventValue);
    EventObj.User_Name	=	req.body.userName;
    EventObj.Start_Date	= 	new Date();
    EventObj.End_Date	=	'';
	EventObj.Name 		= 	req.body.PName;
	EventObj.Version 	=	req.body.Pversion;
	EventObj.Layout 	=	req.body.Playout;
	EventObj.Os 		=	req.body.Pos;
	EventObj.Description=	req.body.Pdescription;
	EventObj.Manufacturer=	req.body.Pmanufacturer;
	EventObj.Product	=	req.body.Pproduct;

    var LastInsertedID;
    EventObj.save(function(err,docsInserted) {
      if (err) throw err;
    	LastInsertedID=docsInserted._id;
      console.log('User saved successfully!' +docsInserted._id);
      
      if(req.body.Prev_Event_ID){
    	  
    Event.findByIdAndUpdate(req.body.Prev_Event_ID, { End_Date: new Date() }, function(err, Prev_Event) {
      if (err) throw err;

      // we have the updated user returned to us
      console.log(Prev_Event._id);
    	res.status(200).send({Status:"Ok",id:LastInsertedID});
      
    });
  }
  else{
  	res.status(200).send({Status:"Ok",id:LastInsertedID});
  	
  }
  
});
//res.status(200).send({Status:"Ok"});
//res.end();*/
//res.status(200).send({Status:"Ok"});
});
	
  //console.log("This is a message from the demo package");
}