function getComputerChoice() {
    const options = ["rock", "paper", "scissor"]
    return options[Math.floor(Math.random() * options.length)]
}

function getplayerSelection() {
    answer = prompt("Option: ").toLowerCase()
    return answer
}

function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getplayerSelection();

    if (computerSelection === playerSelection) {
        return console.log("Tie Game")
    } else if (
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissor" && computerSelection === "rock") 
    ) {
        return console.log("You Lose")
    } else if (
        (computerSelection === "paper" && playerSelection === "scissor") ||
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "scissor" && playerSelection ==="rock") 
    ) {
        return console.log("You Win")
    } else return "Write a correct answer"

}