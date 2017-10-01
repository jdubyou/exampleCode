
var chart = require('ascii-chart');
var clear = require('clear');

var data = [1, 2,30,32,12,9,77];

clear();
console.log(chart(data, { width: 80, height: 20 }));


