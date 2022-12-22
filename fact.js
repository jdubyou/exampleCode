


// An array is a data structure of fixed size, that stores elements of the same type
// A List is a resizable array


var x = 5; // I just allocated memory 0101
var y = "Gino";
console.log(x)

var movies = ["Roots", "Avengers", "God Father"]; // Array of strings
movies.push("Trolls");

for (var i = 0; i < movies.length; i++ ) {
    console.log(movies[i])
}


function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++ ) {
        fact = fact * i;
        console.log('fact inside =' + fact);
    }
    console.log('fact = ' + fact);
    console.log(i);
}
// i = factorial(6)

