// *** A function: a set of statements tht peforms a task of calculates a value
// JavaScript functions are pass by value
// Changes to the variables in a function don't get reflected outside
//
//
value = 12;

function foo(value) {
    value = 32; 
    console.log("Inside foo " + value)
    function xx(value){
    }
}
console.log("Value BEFORE function " + value);
foo(value);
console.log("Value after function " + value);

// *** Notice that since variables are pass by value(i.e. copies) the function  does not alter the 
// variable's value
//
value += 2;
console.log("Value BEFORE function " + value);
foo(value);
console.log("Value after function " + value);


// *** But arrays are passed by reference.
arr = [1, 2, 3, 5 ,7, 9];

// 0x56f8abc876 --> 1, 2, 3...

function bar(a) {
    a[1] = 55;
    console.log(a);
    return a;
}
// bar gets a reference of arr therefore when you change the interal value of an element, it changes

console.log(arr);
console.log(bar(arr));


//  ** Passed by reference:
//  * Arrays
//  * Objects
//
//  ** Pased by value:
//  * Everything else
//
//
//*** Objects behave like arrays. They're passed by reference

obj = {
       "name": "Kunte Kinte",
       "movie": "Roots"
       }

function baz(o) {
    o["name"] = "tyronne";
    console.log(o)
}
 baz(obj);
console.log(obj)

