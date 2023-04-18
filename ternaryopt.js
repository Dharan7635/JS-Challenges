let human = "stone";
let computer = "sissor";
let winner = human === computer ? "Game Tie"
: human === "stone" && computer === "sissor" ? "human win"
:human === "sissor" && computer === "stone" ? "computer win"
:human === "stone" && computer == "paper" ? "computer win"
:human === "paper" && computer === "stone" ? "human win"
:human === "sissor" && computer === "paper" ? "human win"
:"computer win";
console.log(winner);