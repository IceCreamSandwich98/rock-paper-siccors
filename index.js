//rock paper siccors
//take input, comapre with computer
//first to 5 wins
//input shouldnt be case sensitive

const choices = ["rock", "paper", "scissors"];
var computerChoice = Math.floor(Math.random() * 3);
var newComputerChoice;
var computerPoints = 0;
var userPoints = 0;
var _userChoice = prompt("Please enter your name", "Harry Potter");
// switch (computerChoice) {
//   case 0:
//     newComputerChoice = "rock";

//   case 1:
//     newComputerChoice = "paper";

//   case 2:
//     newComputerChoice = "scissors";
// }

function setUpGame(userChoice, newComputerChoice) {
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
  while (userPoints < 5 || computerPoints < 5) {
    setUpGame(_userChoice, _newComputerChoice);
    console.log(`user points : ${userPoints}`);
    console.log(`computer points : ${computerPoints}`);
    if (userPoints == 5 || computerPoints == 5) {
      break;
    }
  }
}

play("paper", "scissors");
