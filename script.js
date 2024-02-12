const inputElement = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");

// Define variables
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomnum = Math.floor(Math.random() * list.length);
let guess;
let turns = 0;

// Event listener for button click
button.addEventListener("click", checkGuess);
inputElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        button.click(); // Trigger the button click event
    }
});


function checkGuess() {
    guess = parseInt(inputElement.value, 10);

    if (isNaN(guess)) {
        document.getElementById("result").innerText = "Invalid input. Please enter a number.";
        return;
    }

    if (guess < randomnum) {
        document.getElementById("result").innerText = "Too low! Try again";
        turns += 1;
    } else if (guess > randomnum) {
        document.getElementById("result").innerText = "Too high! Try again";
        turns += 1;
    } else {
        turns += 1;
        document.getElementById("result").innerText = `Congratulations! You guessed the number in ${turns} turns.`;
        //disable the input and button after correct guess
        inputElement.disabled = true;
        submitButton.disabled = true;
    }
}
