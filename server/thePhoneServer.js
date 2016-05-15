var express = require('express');
var bodyParser = require('body-parser');


var app = express();

require('../lib/db.js');

//We need a function which handles requests and send response
//if the process is anythign other than test create a real server
if (process.env.NODE_ENV !== 'test') {
  //start server
  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("Listening on port ", port);
} else {
  //else we are in testing mode so export routes for testing
  module.exports = app;
}