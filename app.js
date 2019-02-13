let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userscore++;
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  const suw = "user".fontsize(1).sup();
  const scw = "computer".fontsize(1).sup();
  result_p.innerHTML = `${convertToWord(userChoice)}${suw} beats ${convertToWord(computerChoice)}${scw}. You Win!`;
  //result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) +". You Win!";
}

function lose(userChoice, computerChoice) {
  //console.log("You suck!");
  computerscore++;
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  const suw = "user".fontsize(1).sup();
  const scw = "computer".fontsize(1).sup();
  result_p.innerHTML = `${convertToWord(computerChoice)}${scw} beats ${convertToWord(userChoice)}${suw}. You Lost.....  `;
}

function draw(userChoice, computerChoice) {
  //console.log("Draw");
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  result_p.innerHTML = "It's a Tie! :poop:";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    //console.log("User Wins.");
    win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    //console.log("User Loses.");
    lose(userChoice, computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    //console.log("Its a draw.");
    draw(userChoice, computerChoice);
    break;
    default:
  }
}


function main() {
  rock_div.addEventListener('click',function() {
    game("r");
  })
  paper_div.addEventListener('click',function() {
    game("p");
  })
  scissors_div.addEventListener('click',function() {
    game("s");
  })

}

  main();
