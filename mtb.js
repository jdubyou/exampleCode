var assert = require('assert-plus');
var manta = require('manta');
var fs = require('fs');
var crypto = require('crypto');
var MemoryStream = require('memorystream');
var path = require('path');
var XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;
var request = require('request');
var backoff = require('backoff');
var gitio = require('gitio');
var shorturl = require('shorturl');
var once = require('once');
var pathToFileToUpload = process.argv[2];

function jobs(name, map, reduce) {
    assert.ok(name);
    assert.ok(map);
    assert.ok(reduce);

    this.map = map;
    this.name = name;
    this.reduce = reduce;

    // Creating Manta Client used for 
    // all calls to Manta	
    this.client = createMantaClient();
    assert.ok(this.client);

    this.job = {
        name: name,
        phases: [{
            exec: this.map
        }, {
            type: "reduce",
            exec: this.reduce
        }]
    };
    return;
}

/**
 * Create a Manta job. Job parameters are passed into
 * the contructor as a json object
 */
jobs.prototype.createjob = function(cb) {
    var _jobPath = "";
    assert.func(cb, 'callback');
    assert.ok(this.client);
    var client = this.client;
    this.client.createJob(this.job, function(err, jobPath) {
        if (err) {
            console.log("Error creating job " + err);
            return;
        } else {
            cb(jobPath);
            console.log("createjob :" + jobPath);
        }

        getJobOutput(client, jobPath);

        /*	client.endJob(jobPath, function (err) {
    				jobWatch({client: client, job: jobPath}, function (err, _job) {
						console.log("jobWatch %s", JSON.stringify( _job, null, 2));
						client.jobOutput(jobPath, function (err, res) {
		    				assert.ifError(err);

			    			res.on('key', function (k) {
						        console.log('Output key: %s', k);
						    });

				    		res.once('end', function () {
						        console.log('done');
						    });
						});
					});
			});
			this.jobId = jobPath;
			
        });*/

    });
}

function getJobOutput(client, jobId) {
    assert.ok(client);
    assert.ok(jobId);

    client.endJob(jobPath, function(err) {
        jobWatch({
            client: client,
            job: jobPath
        }, function(err, _job) {
            console.log("jobWatch %s", JSON.stringify(_job, null, 2));
            client.jobOutput(jobPath, function(err, res) {
                assert.ifError(err);

                res.on('key', function(k) {
                    console.log('Output key: %s', k);
                });

                res.once('end', function() {
                    console.log('done');
                });
            });
        });
    });
}

/**
 * Get job status.
 *
 * Parameters:
 * 	- jobId : job id representing job. It's a GUID.
 */
jobs.prototype.getJobStatus = function(jobId, cb) {
    assert.ok(jobId);
    assert.func(cb, 'callback');
    assert.ok(this.client);

    console.log("getJobStatus: jobId: " + jobId);

    var client = this.client;
    jobWatch({
        client: client,
        job: jobId
    }, function(err, _job) {
        console.log("jobWatch %s", JSON.stringify(_job, null, 2));
    });
};

function wait(err) {
    var client = this.client;
    var jobId = this.jobId;
    jobWatch({
        client: client,
        job: jobId
    }, function(err, _job) {
        console.log(_job);
    });
}

function jobWatch(opts, cb) {
        assert.object(opts);
        assert.string(opts.job, 'job');
        assert.object(opts.client, 'client');
        assert.func(cb, 'callback');

        cb = once(cb);

        var monitor = backoff.exponential({
            initialDelay: 100,
            maxDelay: 10000
        });

        var client = opts.client;
        var job = opts.job;
        monitor.on('ready', function(attempts, delaysms) {
            client.job(job, function(err, job) {
                if (err) {
                    monitor.reset(); //stop monitoring
                    monitor.removeAllListeners('fail');
                    monitor.removeAllListeners('ready');
                    cb(err);
                } else if (job.state !== 'done' &&
                    job.state !== 'archiving') {
                    monitor.backoff();
                } else {
                    monitor.reset(); //stop monitoring
                    monitor.removeAllListeners('fail');
                    monitor.removeAllListeners('ready');
                    cb(null, job);
                }
            });
        });
        monitor.on('fail', function onFail() {
            cb(new Error(job + 'did not complete in time'));
        });
        monitor.backoff();
    }
/**
 * Create  Manta client
 */
function createMantaClient() {
    var kid = process.env.MANTA_KEY_ID;
    console.log(process.env.MANTA_KEY_ID);
    console.log(process.env.HOME);
    return manta.createClient({
        sign: manta.privateKeySigner({
            key: fs.readFileSync(process.env.HOME + "/.ssh/id_rsa", 'utf8'),
            keyId: process.env.MANTA_KEY_ID,
            user: process.env.MANTA_USER
        }),
        user: process.env.MANTA_USER,
        url: process.env.MANTA_URL
    });
}

/**
 * list objects given a Manta Path
 * Parameters:
 * -path: A path in Manta
 */
function listObjects(path) {
    var opts = {};
    client.ls('/' + process.env.MANTA_USER + path, opts, function(err, res) {
        assert.ifError(err);
        console.log(err);

        res.on('object', function(obj) {
            console.log(obj.name);
        });

        res.on('directory', function(dir) {
            console.log(dir);
        });

        res.once('error', function(err) {
            console.error(err.stack);
            process.exit(1);
        });

        res.once('end', function() {
            console.log('all done');
            process.exit();
        });
    });
}
var j = new jobs("List shit", "ls", "echo");
if (j) {
    j.createjob(function(jobId) {});

}
