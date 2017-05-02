var http = require('http');
var fs = require('fs');
//var express = require('')

var port = 3000;

var server = http.createServer((request,response) => {
  //console.log(request.url);
  console.log('server started');

  var data = '';
  var readStream = fs.createReadStream('output.txt');
  readStream.read('this is input data from file');

  readStream.on('data', (chunk) => {
    data += chunk;
  });//.pipe(response.end(data));

  readStream.on('end', () => {
    response.end(data);
  });
  readStream.on('error', (error) => {
    console.log(error.stack);
  });

  //response.end(data);
});

server.listen(port, (err) => {
  if(err){
    console.log('Something bad happened');
  }

  console.log('Server is listening at ${port}');
});

// http.Get('/File', function(request,response){
//   Console.log('File');
// });
