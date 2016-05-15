var express = require('express');
var bodyParser = require('body-parser');


var app = express();

require('../lib/db.js');

app.get('/', function(req,res){
	const response = 'hi';
	res.status(200).send(response);
})


app.post('/', (req,res) => {
	const response = 'Hi Justin and Natalie';
	res.status(201).send(response);
})

//We need a function which handles requests and send response
//if the process is anythign other than test create a real server
if (process.env.NODE_ENV !== 'test') {
  //start server
  var port = process.env.PORT || 4040;
  app.listen(port);
  console.log("Listening on port ", port);
} else {
  //else we are in testing mode so export routes for testing
  module.exports = app;
}