
window.addEventListener("load", () => {
        // the result of the if statement on the initial opening of the page or browser is null and !null = true
    if (!localStorage.getItem('alertsShown')) {
        alert(`Hi! Thanks for checking out my web app. This game follows the usual rock-paper-scissors rules. If you already know how to play, you can click "OK" to start playing. If not, please read the next pop-up for instructions.
        `);

        alert(`1. Rock crushes scissors.\n2. Paper covers rock.\n3. Scissors cuts paper.\n\nFor example, if you choose rock and the computer chooses scissors, then you win.
        `);
        localStorage.setItem('alertsShown', 'true');
    }
});

let svgs = document.querySelectorAll(".button-svg");
svgs.forEach((svg) => {
    svg.addEventListener("click", playRound);
});


function getComputerChoice() {
    let computerChoices = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoiceIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[computerChoiceIndex];
}

function playRound(event) {
        // using just event.target was giving issues because the svg seemed to have different other tags which gave different event.targets/nodes. And an id has to be unique and applied to 1 single tag at a time. Refer to grandestParent.id to understand the decision made here 
    let grandestParent = event.target.closest(".button-svg");
    let humanChoice = grandestParent.id;
    let computerChoice = getComputerChoice();

    let yourAddedText = document.querySelector(".your-added-text");
    yourAddedText.textContent = humanChoice;
    let computerAddedText = document.querySelector(".computer-added-text");
    computerAddedText.textContent = computerChoice;

    declareWinner(humanChoice, computerChoice);
}

function declareWinner(humanChoice, computerChoice) {
    let declaration = document.querySelector(".declaration");

    if (humanChoice === computerChoice) {
        declaration.textContent = "IT'S A TIE";
        declaration.style.cssText = `font-size: 1.5rem;
                                     font-weight: 600;
                                     display: inline-block; 
                                     background-color: rgba(128, 128, 128, 0.1);
                                     color: rgb(128, 128, 128);
                                     padding: 0.5rem 3rem`;
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER") 
    )   {
        declaration.textContent = "YOU WIN";
        declaration.style.cssText = `font-size: 1.5rem;
                                     font-weight: 600;
                                     display: inline-block;
                                     background-color: rgba(0, 189, 145, 0.1);
                                     color: rgb(0, 189, 145);
                                     padding: 0.5rem 3rem`;
    } else {
        declaration.textContent = "YOU LOSE";
        declaration.style.cssText = `font-size: 1.5rem;
                                     font-weight: 600;
                                     display: inline-block;
                                     background-color: rgba(255, 87, 87, 0.1);
                                     color: rgb(255, 87, 87);
                                     padding: 0.5rem 3rem`;
    }

    awardScores(declaration);
}

function awardScores(declaration) {
    let playerScore = document.querySelector(".player-score");
    let initialPlayerScore = parseInt(playerScore.textContent, 10);
    let computerScore = document.querySelector(".computer-score");
    let initialComputerScore = parseInt(computerScore.textContent, 10);

    if (declaration.textContent === "YOU WIN") {
        playerScore.textContent = initialPlayerScore + 1;
    } else if (declaration.textContent === "YOU LOSE") {
        computerScore.textContent = initialComputerScore + 1;
    }
}

// other javascript functionality
    // write a code to reset the "reset button" that refreshes the page to reset scores of the game
document.querySelector(".reset").addEventListener("click", () => {
    window.location.reload();
});

    // this code handles the issue where the mobile browser's title bar (which includes the URL) takes up some of the viewport height, causing content to be cut off
function adjustHeight() {
    let innerBody = document.querySelector(".inner-body");
    let vh = window.innerHeight * 0.01;
    innerBody.style.height = `${vh * 100}px`;
}

adjustHeight();

window.addEventListener('resize', adjustHeight);
    