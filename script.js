function playRound(playerChoice, getComputerChoice) {
    if (playerChoice === getComputerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (playerChoice === 'rock') {
        if (getComputerChoice === 'paper') {
            console.log("Computer wins!");
        return 'computer';
        } else {
            console.log("You win!");
        return 'you';
        }
    } else if (playerChoice === 'paper') {
        if (getComputerChoice === 'scissors') {
            console.log('Computer wins!') ;
        return 'computer';
        } else {
            console.log('You win!') ;
        return 'you';
        }
    } else if (playerChoice === 'scissors') {
        if (getComputerChoice === 'rock') {
            console.log('Computer wins!');
        return 'computer';
        } else {
            console.log('You win!');
        return 'you';
        }
    } else {
            console.log('Invalid choice, please try again.');
        return 'Invalid choice, please try again.';
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    while (userScore < 5 && computerScore < 5){
        function getComputerChoice() {
            arr = ["rock","paper","scissors"];
            const randomIndex =  Math.floor(Math.random() * arr.length)
            return arr[randomIndex]
        }
        let computerChoice = getComputerChoice()
        let playerChoice = prompt("Rock,paper,scissors?").toLowerCase();

        let outcome = playRound(playerChoice, computerChoice);
        if (outcome === "tie") {
            
        }
        else if (outcome === "you") {
            userScore++;
        }
        else if (outcome === "computer") {
            
            computerScore++;
        }
        else {
            continue;
        }
        console.log("computer's choice: " + computerChoice)
        console.log("user:" + userScore)
        console.log("computer:" + computerScore)
    }
    let winner = userScore > computerScore ? "won" : "lost";
    let restart = prompt(`You ${winner}. Play again?`);
    if (restart.toLowerCase() === "yes"){
        game();
    }
}

game();