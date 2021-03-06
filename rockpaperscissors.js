// This generates the computer's choice and the cheesy sound that plays.
var randomNumb = Math.random();
  if (randomNumb < .34) {
    computerChoice = "Rock";
    function play() {
      var audio = document.getElementById("hadouken");
      audio.play();
    }
  } else if (randomNumb > .67) {
    computerChoice = "Paper";
    function play() {
      var audio = document.getElementById("tiger");
      audio.play();
    }
  } else {
    computerChoice = "Scissors";
    function play() {
      var audio = document.getElementById("hurricane");
      audio.play();
    }
  }

// Chose a switch statement for practice on this function
// User chooses Rock
function choiceRock() {
  switch (computerChoice) {
    case "Rock":
      document.getElementById('text').innerHTML="Tie! 2 Rocks. Starting a fire?";
      break;
    case "Paper":
      document.getElementById('text').innerHTML="You just lost to a piece of paper...";
      break;
    case "Scissors":
      document.getElementById('text').innerHTML="Winner! Winner! Chicken dinner!";
      break;
  }
// jQuery fade effects on #text
  $('#text').show().fadeOut(1499);
// Reloads page for new results
    setTimeout (function() {
    location.reload();
  }, 1500);
}

// User chooses Paper
function choicePaper() {
  if (computerChoice === "Paper") {
    document.getElementById('text').innerHTML="Tie! Making a book with all this paper.";
  } else if (computerChoice === "Scissors") {
    document.getElementById('text').innerHTML="Oh snip! You lost to " + computerChoice + "!";
  } else {
    document.getElementById('text').innerHTML="You smothered " + computerChoice + "!";
  }
// jQuery fade effects on #text
  $('#text').show().fadeOut(1499);
// Reloads page for new results
    setTimeout (function() {
    location.reload();
  }, 1500);
}

// User chooses Scissors
function choiceScissors() {
  if (computerChoice === "Scissors") {
    document.getElementById('text').innerHTML="Tie! Edward Scissor-Hands, much?";
  } else if (computerChoice === "Rock") {
    document.getElementById('text').innerHTML="Sorry. " + computerChoice + " busted you up.";
  } else {
    document.getElementById('text').innerHTML="You shredded " + computerChoice + "!";
  }
// jQuery fade effects on #text
  $('#text').show().fadeOut(1499);
// Reloads page for new results
    setTimeout (function() {
    location.reload();
  }, 1500);
}

// jQuery blinking effect on button
$(document).ready(function () {
  $('.btn').hover(function () {
    $(this).fadeOut(100).fadeIn('fast').fadeOut(100).fadeIn('fast').fadeOut(100).fadeIn('fast');
  });
});
