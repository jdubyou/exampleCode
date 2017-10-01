var request = require('request'),
	cheerio = require('cheerio'),
	urls = [];

	request('http://www.reddit.com', function(err, resp, body) {
			if (!err && resp.statusCode == 200) {
					var $ = cheerio.load(body);
					//console.log($('a.title.may-blank','#siteTable').attr('href'));
					$('a.title.may-blank', '#siteTable').each(function() {
							//console.log(this.name);
							var url = $('a.title','#siteTable').attr('href');
							console.log(url);
							urls.push(url);
					});
			}
	});

			
	
