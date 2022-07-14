console.log('hello world');

//FIZZBUZZ
/*
for (let i = 1; i <=   100; i++) {
  if (i % 5 == 0 && i % 3 == 0 ) {
    console.log('FizzBuzz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if ( i % 3 == 0 ) {
    console.log('Fizz');
  } else{
    console.log(i);
  }
}

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/

//LOOPING A TRIANGLE
/*for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
  */

//CHESSBOARD

/* let size = 10;

 let board = "";
 
 for (let y = 0; y < size; y++) {
   for (let x = 0; x < size; x++) {
     if ((x + y) % 2 == 0) {
       board += " ";
     } else {
       board += "#";
     }
   }
   board += "\n";
 }
 
 console.log(board);
 */

let playerscore = 0;
let computerscore = 0;
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');

rockBtn.addEventListener("click", function () {
  return gameRound('rock');
});
paperBtn.addEventListener("click", function () {
  return gameRound('paper');
});
scissorBtn.addEventListener("click", function () {
  return gameRound('scissor');
});




function gameRound(playerChoice, computerChoice) {
  let choices = ['rock', 'paper', 'scissor'];


  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log('Computer:' + computerChoice);
  console.log('Player:' + playerChoice);

  if (playerChoice == 'scissor' && computerChoice == 'rock' || playerChoice == 'rock' && computerChoice == 'paper' || playerChoice == 'paper' && computerChoice == 'scissor') {
    console.log('YOU LOST THIS ROUND!!!');

    computerscore++;
    console.log('Pscore:' + playerscore);
    console.log('Cscore:' + computerscore);
  } else if (computerChoice === playerChoice) {
    console.log('IT\'S A DRAW!!!');

    console.log('Pscore:' + playerscore);
    console.log('Cscore:' + computerscore);

  } else {
    console.log('YOU WON THIS ROUND!!!');

    playerscore++;
    console.log('Pscore:' + playerscore);
    console.log('Cscore:' + computerscore);
  }

  checkWinner();

}

function checkWinner() {
  if (playerscore == 5) {
    console.log('____YOU WON THE GAME_____')
    playAgain();
  } else if (computerscore == 5) {
    console.log('____YOU LOST THE GAME_____')
    playAgain();
  } else { }
}



function playAgain() {
  const newRound = document.createElement("button");
  const textNew = document.createTextNode("Play Again");
  newRound.appendChild(textNew);
  newRound.setAttribute('class', 'playAgain');
  const element = document.querySelector("#choices");
  element.appendChild(newRound);
  const elementss = document.getElementsByClassName("choice");
  while (elementss.length > 0) elementss[0].remove();
  newRound.addEventListener("click", function () {
    playerscore = 0;
    computerscore = 0;
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorBtn = document.createElement("button");
    const textRock = document.createTextNode("rock");
    const textPaper = document.createTextNode("paper");
    const textScissor = document.createTextNode("scissor");
    rockBtn.appendChild(textRock);
    paperBtn.appendChild(textPaper);
    scissorBtn.appendChild(textScissor);
    rockBtn.setAttribute('class', 'choice');
    paperBtn.setAttribute('class', 'choice');
    scissorBtn.setAttribute('class', 'choice');
    return newGame();
  });
}

function newGame() {
  const elements = document.getElementsByClassName('playAgain');
  while (elements.length > 0) elements[0].remove();

  // playerscore = 0;
  // computerscore = 0;
  // const rockBtn = document.createElement("button");
  // const paperBtn = document.createElement("button");
  // const scissorBtn = document.createElement("button");
  // const textRock = document.createTextNode("rock");
  // const textPaper = document.createTextNode("paper");
  // const textScissor = document.createTextNode("scissor");
  // rockBtn.appendChild(textRock);
  // paperBtn.appendChild(textPaper);
  // scissorBtn.appendChild(textScissor);
  // rockBtn.setAttribute('class', 'choice');
  // paperBtn.setAttribute('class', 'choice');
  // scissorBtn.setAttribute('class', 'choice');


  // const elements = document.getElementsByClassName('playAgain');
  // while (elements.length > 0) elements[0].remove();

}





