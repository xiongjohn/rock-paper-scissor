let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const compPicksRock = document.getElementById("computer-picks-rock");
const compPicksPaper = document.getElementById("computer-picks-paper");
const compPicksScissor = document.getElementById("computer-picks-scissor");
const userPicksRock = document.getElementById("user-picks-rock");
const userPicksPaper = document.getElementById("user-picks-paper");
const userPicksScissor = document.getElementById("user-picks-scissor");

function getComputerChoice() {
  const choices = [`rock`, `paper`, `scissor`];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function removeBorderColor() {
  rock.classList.remove("border-green");
  rock.classList.remove("border-red");
  rock.classList.remove("border-yellow");
  paper.classList.remove("border-green");
  paper.classList.remove("border-red");
  paper.classList.remove("border-yellow");
  scissor.classList.remove("border-green");
  scissor.classList.remove("border-red");
  scissor.classList.remove("border-yellow");
}

function changeBorderColor(userPicks, compPicks) {
  let userBorder = document.getElementById(`${userPicks}`);
  let compBorder = document.getElementById(`${compPicks}`);

  switch (true) {
    case userPicks === "rock" ||
      userPicks === "paper" ||
      userPicks === "scissor":
      removeBorderColor();

      break;

    default:
      return null;
  }
  userBorder.classList.add("border-green");
  compBorder.classList.add("border-red");

  if (userPicks === compPicks) {
    userBorder.classList.add("border-yellow");
  }
}

function handleCompChoice(compPicks) {
  switch (true) {
    case compPicks === "rock":
      compPicksRock.innerHTML = "Computer picks";
      compPicksPaper.innerHTML = " ";
      compPicksScissor.innerHTML = " ";
      break;
    case compPicks === "paper":
      compPicksRock.innerHTML = " ";
      compPicksPaper.innerHTML = "Computer picks";
      compPicksScissor.innerHTML = " ";
      break;
    case compPicks === "scissor":
      compPicksRock.innerHTML = " ";
      compPicksPaper.innerHTML = " ";
      compPicksScissor.innerHTML = "Computer picks";
      break;
    default:
      console.error("Error on handle comp choice");
  }
}

function handleUserChoice(userPicks) {
  switch (true) {
    case userPicks === "rock":
      userPicksRock.innerHTML = "You pick";
      userPicksPaper.innerHTML = " ";
      userPicksScissor.innerHTML = " ";
      break;
    case userPicks === "paper":
      userPicksRock.innerHTML = " ";
      userPicksPaper.innerHTML = "You pick";
      userPicksScissor.innerHTML = " ";
      break;
    case userPicks === "scissor":
      userPicksRock.innerHTML = " ";
      userPicksPaper.innerHTML = " ";
      userPicksScissor.innerHTML = "You pick";
      break;
    default:
      return null;
  }
}

function win(user, computer) {
  userScore++;

  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = computerScore;
  result.innerHTML = `${user} beats ${computer}. You win!`;
  handleCompChoice(computer);
  handleUserChoice(user);
  changeBorderColor(user, computer);
}
function lose(user, computer) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = computerScore;
  result.innerHTML = `${computer} beats ${user}. You lose...`;
  handleCompChoice(computer);
  handleUserChoice(user);
  changeBorderColor(user, computer);
}
function draw(user, computer) {
  result.innerHTML = `${user} equals ${computer}. It's a draw.`;

  handleCompChoice(computer);
  handleUserChoice(user);
  changeBorderColor(user, computer);
}

function handleClick(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissor":
    case "scissorpaper":
      win(userChoice, computerChoice);

      break;
    case "paperscissor":
    case "rockpaper":
    case "scissorrock":
      lose(userChoice, computerChoice);

      break;
    case "paperpaper":
    case "rockrock":
    case "scissorscissor":
      draw(userChoice, computerChoice);

      break;
    default:
      console.error("error handle click");
  }
}

function main() {
  rock.addEventListener("click", () => {
    handleClick("rock");
  });
  paper.addEventListener("click", () => {
    handleClick("paper");
  });
  scissor.addEventListener(`click`, () => {
    handleClick("scissor");
  });
}

main();
