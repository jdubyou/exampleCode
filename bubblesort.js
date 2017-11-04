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

module.exports = sortArray;
