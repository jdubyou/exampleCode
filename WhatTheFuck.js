var express = require('express');
var http = require('https');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sf_post', function(sReq, sRes) {
		console.log(sReq.body);

		request({
			url: 'https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
			method: 'POST',
			form: sReq.body 
		}, function(err, httpResponse, body) {
				//console.log(err);
				//console.log(httpResponse.statusCode);
				//console.log(body);
			//sRes.send(httpResponse.statusCode, body);
			if (httpResponse.statusCode === 200) {
					sRes.redirect('/Thanks.html');
			} else {
					sRes.send(httpResponse.statusCode, body);
			}
		});

		console.log("testing");
});

app.post('/code', function(req, res) {
	console.log(req.body);
	var eventId = req.body.eventid,
		codeEntered = req.body.accesscode;

		//var codeEntered = req.body.code;
	if (eventId === '12345') {
		if (codeEntered === 'abc123') {
				res.send(200, { success: true });
				//res.redirect('/Lead_Form_v3.html');
		} else {
				res.send(200, { status: 'Invalid code' });
		}
	} else {
			res.send(200, { status: 'Invalid event' });
	}
});

app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000);

