var arr = [4,3,2,4,0];

function isConsecutive(arr) {
    var isCons = true;
    if (arr == undefined) {
        return false;
    }
    if (arr[0] > arr[1]) {
	    arr.sort();
    }
    for (var i = 0; i < arr.length - 1; i++) {
        if ((arr[i] + 1) != arr[i + 1]) {
            isCons = false;
            break;
        }
    }
    return isCons;
}

console.log(isConsecutive(arr));
