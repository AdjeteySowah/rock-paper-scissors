    
    // Define a function to request for a player's choice between "rock", "paper", or "scissors"
function getHumanChoice() {
        // Store the player's choice in a variable and return it ensuring that it's case insensitive.
    let humanChoice = prompt("Rock Paper Scissors ?");
    let insensitiveHumanChoice = `${humanChoice.slice(0, 1).toUpperCase()}${humanChoice.slice(1, humanChoice.length).toLowerCase()}`;

    if (insensitiveHumanChoice !== "Rock" && insensitiveHumanChoice !== "Paper" && insensitiveHumanChoice !== "Scissors") {
        insensitiveHumanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors.");
        insensitiveHumanChoice = `${insensitiveHumanChoice.slice(0, 1).toUpperCase()}${insensitiveHumanChoice.slice(1, insensitiveHumanChoice.length).toLowerCase()}`;
    }
    
    console.log(insensitiveHumanChoice);
}

    // Define a function to randomly  select one of 3 strings: "rock", "paper", or "scissors"
function getComputerChoice() {
        // Declare an array to store the three possible choices.
    let computerChoices = ["Rock", "Paper", "Scissors"];
        // Generate a random index within the range of the array length.
    let computerChoice = Math.floor(Math.random() * computerChoices.length);

        // Use the random index to select and output the corresponding string.
    if (computerChoice === 0) {
        console.log("Rock");
    } else if (computerChoice === 1) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

let humanScore = 0;
let computerScore = 0;
var displayScore = {
    player: humanScore,
    compter: computerScore,
  };

function playRound(humanChoice, computerChoice) {
    for (let round = 1; round < 3; round++) {
        getHumanChoice();
        getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log("You win! You read the computer's mind 👏✌️.");
            humanScore++;
        } else {
            console.log(`You lose 👎! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    console.table(displayScore);
}

playRound(humanChoice, computerChoice);