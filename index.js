    
    // Define a function to request for a player's choice between "rock", "paper", or "scissors"
function getHumanChoice() {
        // Store the player's choice in a variable and return it ensuring that it's case insensitive.
    let humanChoice = prompt("Rock Paper Scissors ?");
    let insensitiveHumanChoice = `${humanChoice.slice(0, 1).toUpperCase()}${humanChoice.slice(1, humanChoice.length).toLowerCase()}`;

    if (insensitiveHumanChoice !== "Rock" && insensitiveHumanChoice !== "Paper" && insensitiveHumanChoice !== "Scissors") {
        insensitiveHumanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors.");
        insensitiveHumanChoice = `${insensitiveHumanChoice.slice(0, 1).toUpperCase()}${insensitiveHumanChoice.slice(1, insensitiveHumanChoice.length).toLowerCase()}`;
    }
    
    return insensitiveHumanChoice;
}

    // Define a function to randomly  select one of 3 strings: "rock", "paper", or "scissors"
function getComputerChoice() {
        // Declare an array to store the three possible choices.
    let computerChoices = ["Rock", "Paper", "Scissors"];
        // Generate a random index within the range of the array length.
    let computerChoiceIndex = Math.floor(Math.random() * computerChoices.length);
        // Use the random index to select and output the corresponding string.
    return computerChoices[computerChoiceIndex];
}

    // Initialize variables to store the player's and computer's score before the start of the game
let humanScore = 0;
let computerScore = 0;

function playRound() {
        // Play a series of rounds of the game
    for (let round = 1; round <= 5; round++) {
            // Get the player's and computer's choices for this round
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
            // Display the player's and computer's choices
        console.log(humanSelection);
        console.log(computerSelection);
             // Determine the winner of this round and update scores accordingly
        if (humanSelection === computerSelection) {
            console.log("You win! You read the computer's mind 👏✌️.");
            humanScore++;
        } else {
            console.log(`You lose 👎! ${computerSelection} beats ${humanSelection}.`);
            computerScore++;
        }
    }

        // Create an object to display the final scores of the game in a tabular form
    let displayScore = {
        player: humanScore,
        compter: computerScore,
      };

    console.table(displayScore);
}

playRound();