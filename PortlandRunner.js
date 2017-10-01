var Console = require('console').Console;

// custom simple logger
var logger = new Console(process.stdout, process.stderr);
var restify = require('restify');


logger.log('here we go');


//Helpers
function RestClient() {
    this.client = restify.createJsonClient({
        url: 'http://localhost:8080',
        version: '*'
    });

}

RestClient.prototype.post = function() {
    logger.log('Calling Post');
    this.client.post('/message/', { hello: 'world' }, function(err, req, res, obj) {
        logger.log('Called Post');
        logger.log(err);
        //logger.log(req);
        //logger.log('%d -> %j', res.statusCode, res.headers);
        //logger.log('%j', obj);
    });
}

restClient = new RestClient();
restClient.post();




