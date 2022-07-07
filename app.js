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
    console.log('YOU WIN THIS ROUND!!!');

    playerscore++;
    console.log('Pscore:' + playerscore);
    console.log('Cscore:' + computerscore);
  }

}
function gameStart() {
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
}





function oneGame() {
  while (computerscore < Number(5) && playerscore < Number(5)) {
    if (computerscore == 5) {
      console.log('THE COMPUTER WON THE MATCH!!!');
    } else if (playerscore == 5) {
      console.log('YOU WON THE MATCH!!!')
    } else {
      gameStart();
    }
    
  }
}

oneGame(gameStart());











