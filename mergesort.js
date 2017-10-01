var l = [0, 1,2,11];
var r = [4,6,7,9];
function merge(l, r) {
    var sorted = [];
    for (var i = 0,j = 0; i < l.length && j < r.length;) {
        if (l[i] <= r[j]) {
            sorted.push(l[i]);
            i++;
        } else {
            sorted.push(r[j]);
            j++;
        }
    }
    return sorted;
}
function mergeSort(a, cb) {
    var mid = Math.floor(a.length/2);
    l = a.slice(0,mid);
    r = a.slice(mid, a.length);
    
    mergeSort(l);
    mergeSort(r);
    s = merge(l,r);
    return s;
}
var s = mergeSort([33,4,2,1,55,6,8,7,90]);
console.log(s);


