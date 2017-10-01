function makeCounter() {
    var i = 0;
    return function() {
        console.log(++i);
    };
}

var counter = makeCounter();
//counter();
//counter();

var counter2 = makeCounter();
//counter2();
//counter2();
//counter2();



function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++ ) {
        fact = fact * i;
        console.log('fact inside =' + fact);
    }
    console.log('fact = ' + fact);
    console.log(i);
}

//factorial(3);

function power(a,b) {

    var x = a;
    for (var i = 0; i < (b-1); i++) {
        x = x * a;
    }
    return x;
}
var p = power (10,3);
console.log(p);
