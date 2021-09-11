

function computerPlay() {
    if (randomNumber >= 1 && randomNumber <= 4) {
        return "rock"
    } else if (randomNumber > 4 && randomNumber <= 7) {
        return "paper"
    } else if (randomNumber > 7 && randomNumber <= 10) {
        return "scissors"
    }
}
randomNumber = Math.floor(Math.random() * 10) + 1

let paper = "paper"
let rock = "rock"
let scissors = "scissors"

function playRound(playerSelection, computerSelection) {

    if (playerSelection === rock && computerSelection === rock) {
        return "Draw!"
    } else if (playerSelection === paper && computerSelection === paper) {
        return "Draw!"
    } else if (playerSelection === scissors && computerSelection === scissors) {
        return "Draw!"
    } else if (playerSelection === rock && computerSelection === scissors) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === rock && computerSelection === paper) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === paper && computerSelection === scissors) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === paper && computerSeleceion === rock) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === scissors && computerSelection === paper) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === scissors && computerSelection === rock) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


const playerSelection = rock;
console.log(playerSelection)

const computerSelection = computerPlay();
console.log(computerSelection)

console.log(playRound(playerSelection, computerSelection));



// return `You Win! ${} beats ${}`
// return `You Lose! ${} beats ${}`

// rock beats scissors

// scissors beats paper

// paper beats rock