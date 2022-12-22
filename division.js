var num = 18;
var den = 5;

function divWithRemainder(num, den) {
    var count = 0;
    var origNum = num;
    while (num > 0 && num >= den ) {
       num = num - den;
       count++;
    }
 ans = {"result": count,
        "rem": num}
 return ans;
}
// console.log(divWithRemainder(num, den));

function divWithDecimal(num, den) {
    var count = 0;
    var rem = 0;
    while (num > 0 && (num - den) >= 0) {
        num = num - den;
        count++;
    }
    if (num > 0) {
        rem = divWithDecimal((num * 10), den)
    }
    ans = "" + count;
    if (rem > 0)
        ans += ".";
        ans += rem;
    return ans;
}
console.log(divWithDecimal(11,2));
