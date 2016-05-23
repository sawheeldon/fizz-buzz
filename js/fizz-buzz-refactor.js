/* this app has the following parts
- PART 1 => prompt for a number
- PART 2 => validate input
- PART 3 => if the input is valid play the game
- PART 3.1 => count from 1 to the set limit
- PART 3.2 => for each number check it and output the result
*/
function validateInput(inputNumber) {

    var userInputCorrectFlag = true;

    while (inputNumber.length < 1) {
        var inputNumber = prompt("Please enter 1 or more digit.");
        userInputCorrectFlag = false;
    }
    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = prompt("Please try with no spacing, just enter a number.");
        userInputCorrectFlag = false;
    }
    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your upper limit was not a number, please try again.");
        userInputCorrectFlag = false;
    }

    if (userInputCorrectFlag = true) {
        playFizzBuzz
    }
}

function playFizzBuzz(input) {
    for (var counter = 1; counter <= limit; counter++) {
        $('#showResults').append(checkFizzBuzz(counter));
    }

}

function checkFizzBuzz() {

}

function input() {
    //alert("This works");
    prompt("Please set the highest number for the game");
}

$(document).ready(function () {

    $('#click-me').click(function () {
        input();

        validateInput(input);
    });
});
