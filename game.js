function getComputerChoice() {
    const x = Math.floor(Math.random() * 3)
    const choices = ["rock", "paper", "scissors"]

    let result = choices[x]
    // console.log(result)
    return result
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 0
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 1
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 1
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 1
    } else {
        return 2
    }
}

function game() {
    let computerChoice
    let playerChoice, result
    let playerScore = 0, computerScore = 0;

    while (playerScore < 5 &&  computerScore < 5) {
        playerChoice = prompt().toLowerCase()
        computerChoice = getComputerChoice()
        result = playRound(playerChoice, computerChoice)
        
        console.log("Calculating results for: " + playerChoice + " (player) vs. " + computerChoice + " (computer)!")
        
        if (result == 0) {
            console.log("Tie!")
        } else if (result == 1) {
            console.log("CPU Wins!")
            computerScore++
        } else {
            console.log("Player wins!")
            playerScore++
        }

        console.log("Score: " + playerScore + " (Player) | " + computerScore + " (Computer)")
    }
}

game()