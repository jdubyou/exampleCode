var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var util = require('util');

http.createServer(function (req, res) {
	 var body = "";
	 if (req.method === 'GET') {
	 		fs.readFile('./test.html', function (err, page) {
				 res.writeHead(200, {'Content-Type': 'text/html'});
			 	res.write(page);
			 	res.end();
	 		});
	 	
	 }
}).listen(8080);
