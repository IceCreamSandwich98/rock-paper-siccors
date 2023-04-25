//rock paper siccors
//take input, comapre with computer
//first to 5 wins
//input shouldnt be case sensitive

const choices = ["rock", "paper", "scissors"];
var computerChoice;
var newComputerChoice;
var computerPoints = 0;
var userPoints = 0;
// var _userChoice = prompt("Please enter your name", "Harry Potter");

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      return computerChoice;

    case 1:
      computerChoice = "paper";
      return computerChoice;

    case 2:
      computerChoice = "scissors";
      return computerChoice;
  }
}

function setUpGame(userChoice, newComputerChoice) {
  newComputerChoice = getComputerChoice();
  if (
    choices.includes(userChoice.toLowerCase()) &&
    choices.includes(newComputerChoice)
  ) {
    switch (userChoice.toLowerCase()) {
      case "rock":
        switch (newComputerChoice.toLowerCase()) {
          case "rock":
            break;

          case "paper":
            computerPoints++;

            break;

          case "scissors":
            userPoints++;

            break;
        }
        break;

      case "paper":
        switch (newComputerChoice) {
          case "rock":
            userPoints++;
            break;

          case "paper":
            break;

          case "scissors":
            computerPoints++;
        }
        break;
      case "scissors":
        switch (newComputerChoice) {
          case "rock":
            computerPoints++;
            break;

          case "paper":
            userPoints++;
            break;

          case "scissors":
        }
        break;
    }
  } else {
    console.log(
      'please enter a correct choice --> "rock" "paper" "scissors"  '
    );
  }
}

function play(_userChoice, _newComputerChoice) {
  let i = 0;
  while (i < 5) {
    setUpGame(_userChoice, _newComputerChoice);
    console.log(`user points : ${userPoints}`);
    console.log(`computer points : ${computerPoints}`);
    i++;
  }

  if (userPoints > computerPoints) {
    console.log("user wins");
  } else if (computerPoints > userPoints) {
    console.log("computer wins");
  } else {
    console.log("Tie!");
  }
}

console.log(getComputerChoice());
play("paper", "scissors");
