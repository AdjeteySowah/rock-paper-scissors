# Rock-Paper-Scissors

This project is part of [theOdinProject foundations course](https://www.theodinproject.com/paths/foundations/courses/foundations). It is a simple implementation of the classic game "Rock Paper Scissors" played against the computer. Initially, the game was built using an empty HTML file and JavaScript, meaning it was played in the console. Now, it has a graphical user interface.

## Features
- Player can choose between "rock", "paper", or "scissors".
- Computer randomly selects one of the three options ("rock", "paper", or "scissors").
- The game determines the winner based on the choices made.
- Scores are tracked and displayed after each round.

## How to Play
1. Clone or download the repository to your local machine.
2. Open the index.html file in your web browser.
3. Follow the on-screen instructions to play the game.
4. Choose "rock", "paper", or "scissors" by clicking on the respective button.
5. The computer will randomly select its choice.
6. The game will determine the winner and display the outcome. The winner is decided based on the following rules:
   - Rock crushes scissors.
   - Paper covers rock.
   - Scissors cuts paper.
   For example, if you choose rock and the computer chooses scissors, you win.

## Technologies Used
- HTML
- CSS
- JavaScript

## Additional Information
When you first load the game, you'll see two pop-up alerts with instructions:
1. The first alert welcomes you and provides a brief introduction.
2. The second alert explains the rules of the game.

### JavaScript Code Explanation
- **Window Load Event**: Displays the instruction pop-ups the first time the game is played.
- **Event Listener for Buttons**: Attaches a click event listener to each button representing rock, paper, and scissors.
- **getComputerChoice Function**: Randomly selects the computer's choice.
- **playRound Function**: Handles the player's choice, gets the computer's choice, and updates the display with both choices.
- **declareWinner Function**: Determines and displays the winner of the round based on the rules.
- **awardScores Function**: Updates and displays the scores for the player and computer.

[Live website](https://adjeteysowah.github.io/rock-paper-scissors/)