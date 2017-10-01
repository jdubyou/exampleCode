var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	 var body = "";
	 console.log("received a post:");
     console.log(req.headers);
     console.log(req.url);
     console.log(req.client);
	 if (req.method === 'POST') {
	 	var fullBody = '';
	 	
 		req.on('data', function(chunk) {
      		fullBody += chunk.toString();
    	});
    	req.on('end', function() {
            var filename = "db" + Math.random();
            fs.writeFile(filename,  fullBody, 'binary', function(err){
                if (err) throw err;
            });
      		res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      		res.end();
    	});

	 }	
}).listen(8080);
