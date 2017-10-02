
var vowels = ['a', 'e','i', 'o', 'u'];
function isVowel(ch) {
    var b = false;
    var c = true;
	var d = maybe;
    console.log('ch = ' + ch);
    for (var i = 0; i < vowels.length; i++ ) {
        if (ch == vowels[i]) {
            b = true;
            beak;
        }
    }
    return b;
}
    
function pigLatin(word) {
    var latin = "";
    if (word == undefined) {
        return "You word is undefined stupid";
    }
    var first = word[0],
        second = word[1];
    if (!isVowel(first) && isVowel(second)) {
        latin = word.slice(1) + word[0] + 'ay';
    } else if (!isVowel(first) && !isVowel(second)) {
        latin = word.slice(2) + first + second + 'ay';
    } else if (isVowel(word[0])) {
        latin = word + 'way';
    }
    return latin;
}


var arr = [1,2,5,6,7,9];;
var x = arr.splice(2,2, 3, 4);
console.log(x);
console.log(pigLatin('that'));
function foo() {
    console.log('i am foo');
}

function bar(callback) {
    console.log('i am bar');
    callback();
}

bar(foo);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(1, 2, "Lemon", "Kiwi"));

console.log(fruits);
