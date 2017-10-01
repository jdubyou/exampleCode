function evenOdd() {
    var arr = [2,3,55,66,77,88,99,4,0];
    var evenCount = 0;
    var oddCount = 0;
    for (var i = 0; i < arr.length; i++ ) { // <----Beginning of Loop
        if (arr[i] % 2 == 0) {
            evenCount = evenCount + 1;
        } else {
            oddCount = oddCount + 1;
        }
    } // <---- End of the Loop 
    console.log(evenCount +  ' even numbers');
    console.log(oddCount +    ' odd numbers');
}

module.exports = evenOdd;
