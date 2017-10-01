//Consecutive
//

var a = [1,2,6,4,5];

function isConsecutive(arr) {
    var isCons = true;
    if (arr === undefined) {
        return false;
    }
   
    for (var i = 0; i < arr.length - 1; i++) {
        if ((arr[i] + 1) !== arr[i + 1]) {
            isCons = false;
            break;
        }
    }
    return isCons;
}
//console.log(isConsecutive(a));

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(chunk.reverse() + "\n");
    }
});




