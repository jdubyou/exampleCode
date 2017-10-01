var evenOdd = require('./evenOdd.js');
// Goal: Insert an elment(i.e. number) into a sorted array. A sorted arrray is like [1,2,3,4,5]
// If we have [1,2,5,6,7] and an element 3, we want the resulting array to be [1,2,3, 5, 6, 7]
//
// Steps:
// Define function called insert that takes an array and an elment like so function insert(arr, num) {...}
// Define my results array that will contain the elements of arr and the num properly inserted
// I want to insert every element in arr into newArray that is less than num
// If num is greater than any element, insert num into newArray
// When done, return newArray

// [1,2,4,5] [3]
/* This function assumed the array is already sorted
 *      arr - Expects an array of numbers that are sorted
 *      num - the number(element) that you want to insert
 * This function will return a sorted array with num inserted
 */
function insertElement(arr, num) {
    var newArray = [];
    var hasElementBeenInserted = false;
    if (arr == undefined || num == undefined) {
        return ["You are an idiot"]
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num || hasElementBeenInserted == true) {
            newArray.push(arr[i]);
        } else if (hasElementBeenInserted == false) {
            newArray.push(num);
            newArray.push(arr[i]);
            hasElementBeenInserted = true;
        } 
    }
    if (hasElementBeenInserted == false) {
        newArray.push(num);
    }
    return newArray;
}
evenOdd();
var b = [3, 3, 3, 3, 9 ,10];
var num = 3;
var result = insertElement(b, num);
console.log(result);









