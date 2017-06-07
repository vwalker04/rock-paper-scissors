// This generates the computer's choice.
var computerChoice = Math.random();
  if (computerChoice < .34) {
    computerChoice = "Rock";
  } else if (computerChoice > .67) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

// I replaced an If / Else statement with a Switch
// statement to replicate desired results for practice.
function choiceRock() {
  switch (computerChoice) {
    case "Rock":
      alert("Tie! 2 Rocks. Starting a fire?");
      break;
    case "Paper":
      alert("You just lost to Paper... *Sigh*");
      break;
    case "Scissors":
      alert("Winner! Winner! Chicken dinner!");
      break;
  }
}
// function choiceRock() {
//   if (computerChoice === "Rock") {
//     alert("Tie!");
//   } else if (computerChoice === "Paper") {
//     alert("You lost to " + computerChoice + "!");
//   } else {
//     alert("You bashed the heck out of " + computerChoice + "!");
//   }
// }

function choicePaper() {
  if (computerChoice === "Paper") {
    alert("Tie! Making a book with all this paper.");
  } else if (computerChoice === "Scissors") {
    alert("Oh snip! You lost to " + computerChoice + "!");
  } else {
    alert("You smothered " + computerChoice + "!");
  }
}

function choiceScissors() {
  if (computerChoice === "Scissors") {
    alert("Tie! Edward Scirssor-Hands, much?");
  } else if (computerChoice === "Rock") {
    alert("Sorry. " + computerChoice + " busted you up.");
  } else {
    alert("You shredded " + computerChoice + "!");
  }
}

// Was displaying user choice in HTML body but after
// adding reload() method the text was void.

// function decisionRock() {
//   document.getElementById('text').innerHTML="Rock!";
// };
// function decisionPaper() {
//   document.getElementById('text').innerHTML="Paper!";
// };
// function decisionScissors() {
//   document.getElementById('text').innerHTML="Scissors!";
// };
