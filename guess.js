        

var answer = Math.floor(Math.random() * 100);
console.log('Please guess a number between 1 and 100');
process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        if (parseInt(chunk) === answer) {
            console.log('You guessed it! Please guess again:)');
            answer = Math.floor(Math.random() * 100);

        } else {
            if (parseInt(chunk) > answer) {
                console.log('Your guess is too high');
            } else {
                console.log('Your guess is too low');
            }
        }
   }
});

