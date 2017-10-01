var arr = process.argv;


function multiply(a, b) {
    return a * b;
}
var x = process.argv[2];
var y = process.argv[3];
var result = multiply(x, y);
console.log('your answer is ' + result);

