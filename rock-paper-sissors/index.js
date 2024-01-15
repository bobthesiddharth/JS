let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "sissor"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw!";
  msg.style.backgroundColor = "#081b31";
  console.log("game was drawn,Play Again");
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    console.log("You win!");
    console.log(userScore);
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    console.log("You lose!");
    console.log(compScore);
  }
};

const playGame = (userChoice) => {
  console.log("userChoice: " + userChoice);

  const compChoice = genCompChoice();
  console.log("compChoice: " + compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      //paper,sissor
      userWin = compChoice === "sissor" ? true : false;
    } else if (userChoice == "paper") {
      //rock,sissor
      userWin = compChoice === "rock" ? true : false;
    } else {
      //rock,paper
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
