var fs = require('fs');

var aibParser = function(path, options) {
	this.file = path;

	this.parse = function(callback) {
		var _this = this;
		var options = {offset: 0};
		fs.readFile(this.file, function(error, buffer) {
			if (error) {
				return callback(error,null);
			}
			console.log("buffer.length : " + buffer.length);
			findSpokenWords(buffer, options);		
		});
	}
	
}
	
var parseChunk = function(buffer, options) {
	options = options || {};
	var ckID = buffer.toString('ascii',options.offset,options.offset+4);
	console.log("parseChunk:buffer.length: " + buffer.length);
	options.offset += 4;
	console.log("parseChunk:options.offset :" + options.offset);
	var ckSize = buffer.readUInt32LE(options.offset, true);
	console.log("parseChunk:readUInt32BE:ckSize: " + ckSize, " options.offset :" + options.offset);
	var has_padding = ckSize %2 === 1;
  	options.offset += 4;
		
	if (ckID === 'BODY' && options.offset+ckSize > buffer.length) {
				console.log("has body");
				ckSize = buffer.length - options.offset;
				if (has_padding) {
					ckSize--;
				}
	}
	var ckData = buffer.slice(options.offset, options.offset+ckSize);
	options.offset += ckSize + (has_padding ? 1 :0);
	
	//console.log("ckData =" + ckData);
	//console.log("ckID =" + ckID + " ckSize =" + ckSize);
	return {ckID: ckID, ckSize: ckSize, ckData: ckData};
}
var findSpokenWords = function(buffer, options) {
		var words = [];
		var indexOfTheWordSpoken = 0;
		var spoken = '730070006f006b0065006e00';
		var spokenWords = [];
		//var result = buffer.toString('ascii',0, buffer.length-1);
		var result = buffer.toString('utf16le',0, buffer.length-1);
		var match = result.match(/spoken:.*?\0/g);
		console.log("match = " , match );

		/*for (var i=0; i < buffer.length; i++) {
			if (buffer.toString('hex',i,i+12) == spoken) {
				i = indexOfTheWordSpoken = i+12;
				buildWordList(indexOfTheWordSpoken,buffer,spokenWords);
			}
		}*/



};
var buildWordList = function(indexOfTheWordSpoken, buffer, spokenWords) {
		//var oneWord = "";
		var exclamationPoint = '21';
		var keepGoing = true;
		var oneWord = "";
		for (var j = indexOfTheWordSpoken; j < buffer.length && keepGoing; j++) {
				var currentByte = buffer.toString('hex',j,j+1);
				if (currentByte == exclamationPoint) {
								console.log(buffer.toString('ascii',j,j+8));
				}

				/*if (currentByte >= '61' && currentByte <= '7b' ) {
					oneWord += currentByte;
				} else if (currentByte == exclamationPoint) {
						console.log("pushing " + oneWord.toString('utf8') + " into the array");
						spokenWords.push(oneWord);
						oneWord = null;
						keepGoing = false;
				} else {
				}*/
		}
}




var parser = new aibParser("815973.aib",{});
parser.parse(function() {
		console.log("parser called");
});

