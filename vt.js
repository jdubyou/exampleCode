var Veritone = require('@veritone/veritone-qs');

var options = {
    token: '27zk0jcv:65e3b8f025fb11e5adad8f203ff755b06eff5078114f43e981e16795c3d4675f'
};
var veritone = new Veritone(options);

var recordingId = {uid: '6735385'};
veritone.transcript.transcribe(recordingId, function(err, output) { console.log( output )});
