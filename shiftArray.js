let arr = [1, 2, 3, 4, 5 ,6, 7, 8, 9];

/* This function shifts elements in the array to the right
 * This means that the number 8 above gets put in the position where 9 is
 * and the number 7 gets put in the position where 8 is.
 * Once we get to the end and all numbers have been shifted to the right,
 * we put a zero in the first position of the array, e.g. arr[0] = 0;
 */
function shiftRight() {
    // I have intentionally left out error checking
    // Note that this for loop counts down
    // and that the variable j starts at arr.length - 1 which is position 8
    for (let j = arr.length - 1; j > 0; j -= 1) {
        arr[j] = arr[j - 1];
    }
    arr[0] = 0;
}

shiftRight();
console.log(arr);


