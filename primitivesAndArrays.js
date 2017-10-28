// Primitives - When you access a primitive you work directly on its value
// Primitives are...
//  string
//  number
//  boolean
//  null
//  undefined
//  symbol
//
//
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9

// Complex types are like arrays. They are accessed by reference. When you access a complext type you work on a reference to its value
//
//  object
//  array
//  function
//
const  broncos = [3, 2];
const team = broncos;

team[0] = 9;

console.log(broncos[0], team[0]); // => 9, 9

var x= 99;
foo(x) {
}
bar(x) {
}


// ECMAScript 2015 introduce let and const to replace var. Both are block scoped
//
////Scope and functions in JavaScript
//A variable can be defined in either local or global scope, which establishes the variables' accessibility from different scopes during runtime
//
//
//
//Any defined global variable, meaning any variable declared outside of a function body will live throughout the runtime and can be accesse and altered in any scope
//
//Example:

function scopeTest() {
    let y = 10;
    console.log(broncos); // This works because broncos is in the global scoope
}
console.log(y) // => This fails because y has function scope and can therefore only be seen by the function scopeTest

// Local  variables exist only withink the function body of which they are defined and will have a different scope for every call of that function.
//
// ECMAScript (ES6) introduced the let and const keywords that support the declration of block scope local variables. This means the variable will be confined to the scope of a block it is defined in, such as an if statement or for loop and will not be accissible outiside of opening and closing curly braes of the block.
//
// Note that const is a constant or read only reference to a value. THIS DOES NOT MEAN THE VALUE IS IMMUTABLE, JUST THAT THE VARIABLE IDENTIFIER CANNOT BE REASSIGNED
var a = 2;
function foo() {
    var a = 3;
    console.log(a); // => 3
}
console.log(a); // => prints 2

// As a rule of thumb use let and const which only exist in the blocks they are defined.
//
{ 
    let z = 22;
    const v = 55;
}
console.log(z);
console.log(v); // ReferenceError. These variables only exist in the blocks they are defined in

//Note that const means you simply can't reassign and that the variable must be given a value when declared
//
const MAX = 5000;

MAX = 12; // => SyntaxError
MAX++; // => Also a SyntaxError
const MIN; // => Also a SyntaxError
