function power(a,b) {

    var x = a;
    for (var i = 0; i < (b-1); i++) {
        x = x * a;
    }
    return x;
}
var p = power (10,3);
console.log(p);
