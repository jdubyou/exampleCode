var Veritone = require('@veritone/veritone-qs');

var options = {
    token: '27zk0jcv:65e3b8f025fb11e5adad8f203ff755b06eff5078114f43e981e16795c3d4675f'
};
var veritone = new Veritone(options);

var uri = {uri: 'http://www.freeinfosociety.com/media/sounds/20.mp3'};
veritone.media.upload(uri, function(err, output) { console.log( output ); });
