var arr1 = [2, 4, 6, 1, 77, 5, 33];
var arr2 = [3, 4 ,2, 1, 0, 33];
// Sort functions already exists but since this is learning 
// experience, here I create a sort based on bubble sort.
// MergeSort would be the most efficient but would require
// the most explanation
function sortArray(array) {
    for (let j = 0; j < array.length; j += 1) {
        for (let i = 0; i < array.length; i += 1) {
            // If the current array index is greater than the next one
            // we need to swap them
            if (array[i] > array[i + 1]) {
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
            } 
        }
    }
}
function compareArrays(a1, a2) {
    let end;
    if (a1.length > a2.length) {
        end = a1.length;

    } else {
        end = a2.length;
    }
    for(let i = 0; i < end; i += 1) {
        if (a1[i] !== a2[i]) {
            if (a1[i] !== a2[i + 1] && 
                a1[i] !== a2[ i - 1] && 
                a1[i] < a2[i-1]) {
                    console.log(a1[i]);
            }
            if (a2[i] !== a1[i + 1] && 
                a2[i] !== a1[i - 1] && 
                a2[i] < a1[i - 1]) {
                    console.log(a2[i]);
            }
            
        }
     
    } 
    if (a1.length === end)
            console.log(a1[end - 1]);
        else
            console.log(a2[end - 1]);

}

// Here we sort both arrays. Since arrays are in the global scope
// and are accessed by reference the result of each call to sortArray(...)
// changes each array
sortArray(arr1);
sortArray(arr2);
console.log("sorted array 1: " + arr1);
console.log("sorted array 2: " + arr2);
compareArrays(arr1,arr2);
