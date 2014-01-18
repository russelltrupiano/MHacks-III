// var http = require('http');

// http.createServer(function(request, response){
//   response.writeHead(200);
//   response.write("Server is running");
//   setTimeout(function(){
//     response.write("Server is done");
//     response.end();
//   }, 5000);
// }).listen(8080);

// // console.log("Listening on port 8080...');");

var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

logger.on('error', function(message){
  console.log("ERR: " + message);
});

logger.emit('error', 'Spilled Milk');