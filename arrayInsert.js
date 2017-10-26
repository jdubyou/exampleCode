// Option #1 use the tools of the language i.e. use splice
var test_array = [2, 2, 3, 5, 6, 7]; // using let instead of var because it is block scoped
test_array.splice((test_array.length / 2), 0, 4);
console.log(test_array);

function add(arr, num, position) {
    let len; 
    let i;
    if (arr === undefined || arr === null || !arr instanceof Array || arr.length <= 0) {
        throw ('Invalid array');
    }
    if (position === undefined || position === null || position < 0) {
        throw ('Invalid position');
    }
    if (num === undefined || num === null || isNaN(num)) {
        throw ('invalid num');
    }
    len = arr.length;
    for (i = len - 1; i >= position; i-=1) {
        arr[len] = arr[i];
        len -= 1;
    }
    arr[position] = num;
}
// Make a sample array
let a = [1, 2, 3, 5, 6, 7, 8];

// Pick the middle, use Math.floor for odd number lengthed arrays
let middle = Math.floor(a.length / 2);
// Call the function

add(a, 4, middle);
console.log(a);
