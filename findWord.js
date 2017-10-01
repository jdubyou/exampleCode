/* Find a word within an arry.
 * arr - the array toe search.
 * word- the word to find in arr
 * returns true if the word is found an false otherwise
 */
function findWord(arr, word) {
    var weGotAMatch = false;
    // Check & make sure both input parameters are valid
    if (word == undefined || arr == undefined || word == "") {
        return false;
    }
    var firstLetter = word[0];
    var keepGoing = true;
    // Scan the array to see if first letter is found first
    for (var i = 0; i < arr.length && keepGoing; i++ ) {
        if (firstLetter == arr[i]) {
            i++; // Goto the next index since we know we have a match on the first letter
            var n = 1;
            weGotAMatch = true; // first letter was found so let's remember
            //Now search to see if the next characters also match
            for (var j = i; j < arr.length && n < word.length && weGotAMatch == true; j++) {
                if (word[n] !== arr[j]) {
                    weGotAMatch = false; // if this happens the following characters didn't match
                }
                n++;
            }
            // If we exist this loop and weGotAMatch is still true, then all characters matched
            if (weGotAMatch) {
                keepGoing = false;
            }
        }


    }
    return weGotAMatch;
}

var word = 'james';
var a = 'llxcaxtjamesbcatk';

var b = findWord(a, word);
console.log(b);

var b2 = findWord(a, "grinch");
console.log(b2);

var b3 = findWord(a, "cat");
console.log(b3);
