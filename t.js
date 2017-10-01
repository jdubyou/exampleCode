var fs = require('fs');

var stdin = process.openStdin();

var data = "";

stdin.on('data', function(chunk) {
  var row = chunk.toString();
  if (row.match(/\[Event/)) {
	console.log("row: " + row);
  }
});

stdin.on('end', function() {
  //console.log("data:" + data + "\nEND DATA");
});




