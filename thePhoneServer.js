var http = require('http');
var express = require('express');

const port=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);


server.listen(port, function(){
    console.log("listening on port: ", port);
});