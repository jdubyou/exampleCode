function palindrome (arr) {
    var reverseWord = [];
    var isPalindrome = false;
    for (var i= arr.length-1; i >=0; i--) {
        reverseWord += arr[i];
    }
    if (arr == reverseWord) {
        isPalindrome = true;
    }
    return isPalindrome;
}
var word = "pop";
var b = palindrome(word);
if (b == true) {
    console.log(word + ' is a palindrome');
} else {
    console.log(word + ' is not a palindrome');
}
