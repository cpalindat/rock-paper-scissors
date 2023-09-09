function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let choiceNumber = Math.floor(Math.random() * 3)
    return options[choiceNumber]
}

function toTitleCase(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
}

function playRound() {
    let playerChoice = toTitleCase(prompt("Enter your choice."))
    let computerChoice = toTitleCase(getComputerChoice())

    if (playerChoice == computerChoice) {
        console.log("Tie! " + playerChoice + " doesn't beat " + computerChoice + "!")
        return 2
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! " + playerChoice + " beats " + computerChoice + "!")
        return 1
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! " + playerChoice + " beats " + computerChoice + "!")
        return 1
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! " + playerChoice + " beats " + computerChoice + "!")
        return 1
    } else {
        console.log("Computer wins! " + playerChoice + " loses to " + computerChoice + "!")
        return 0
    }
}

function game () {
    let computerScore = 0
    let playerScore = 0
    let results;

    for (i = 0; i < 5; i++) {
        results = playRound()
        if (results == 1) {
            playerScore++
        } else if (results == 0) {
            computerScore++
        }
    }

    (playerScore > computerScore) ? console.log("Player wins!") : console.log("Computer wins!")
}

game()