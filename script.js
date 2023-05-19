function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        announcer.innerText = "It's a tie!";
        return "tie";
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            announcer.innerText = "Computer wins!";
        return 'computer';
        } else {
            announcer.innerText = "You win!";
        return 'you';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            announcer.innerText = "Computer wins!" ;
        return 'computer';
        } else {
            announcer.innerText = "You win!" ;
        return 'you';
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            announcer.innerText = "Computer wins!";
        return 'computer';
        } else {
            announcer.innerText = "You win!";
        return 'you';
        }
    }
}
function getComputerChoice() {
    arr = ["rock","paper","scissors"];
    const randomIndex =  Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

let pScore = 0;
let cScore = 0;

const playerScore = document.querySelector('span.playerScore')
const computerScore = document.querySelector('span.computerScore')

const buttons = document.querySelectorAll('button')
const announcer = document.querySelector('div.announcer')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    if (pScore >= 5 || cScore >= 5){
        button.disabled = true;
        if (pScore > cScore){
            announcer.innerText = 'You won the game. Refresh the page to play again.'
        }
        else {
            announcer.innerText = 'Computer won the game. Refresh the page to play again.'
        }
    }
    else {
        let winner = playRound(button.classList[0], getComputerChoice());
        if (winner === 'tie') {

        }
        else if (winner === 'you') {
            playerScore.innerText = ++pScore;
        }
        else if (winner === 'computer') {
            computerScore.innerText = ++cScore;
        }
        }
    })
})

