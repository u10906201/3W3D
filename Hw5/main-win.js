var shelljs = require('shelljs');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Hw5.html');
});

app.get ('/api', function (req, res) {

	var radius = req.query.radius;
	var x_center = req.query.x_center;
	var y_center = req.query.y_center;
	var x1 = req.query.x1;
	var y1 = req.query.y1;
	var x2 = req.query.x2;
	var y2 = req.query.y2;
	var velX = req.query.velX;
	var velY = req.query.velY;
		
	shelljs.exec('main.exe ' + radius + ' ' + x_center + ' ' + y_center + ' ' + x1 + ' ' + y1 + ' ' + x2 + ' ' + y2 + ' ' + velX + ' ' + velY, function(status, output) {
	  console.log('Exit status:', status);
	  console.log('Program output:', output);
	  
	  console.log('circle center:',x_center,y_center);

      var output = {
        status: status,
        output: output
      };
		
      /*
        The response header for supporting CORS:
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      */

	  res.writeHead(200, {
		  "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type"
	  });
	
	  res.write( JSON.stringify(output) );
	  res.end();

	});

});


// or simply
// app.listen (1337); 
// will do

var server = app.listen (1337, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log ('server started on http://' + host + ':' + port);
});

