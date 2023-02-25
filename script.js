function play(userChoice) {
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = "";

    if (userChoice === computerChoice) {
      result = "Tie!";
    } else if (userChoice === "rock" && computerChoice === "scissors" ||
               userChoice === "paper" && computerChoice === "rock" ||
               userChoice === "scissors" && computerChoice === "paper") {
      result = "You Win!";
    } else {
      result = "You Lose!";
    }

    document.getElementById("result").innerHTML = result;
  }