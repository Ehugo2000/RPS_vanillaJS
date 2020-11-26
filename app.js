const selectionButtons = document.querySelectorAll("[data-selection]");

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    makeSelection(selectionName);
    console.log(gameLogic());
  });
});

let makeSelection = function (selection) {
  console.log(selection);
};

// Computer
let gameLogic = function () {
  const random = Math.random();
  if (random < 0.34) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissor";
  }
};


// TEST ONE
// let playerRock = document.getElementById("rock");
// let playerPaper = document.getElementById("paper");
// let playerScissor = document.getElementById("scissor");

// playerRock.addEventListener("click", function () {
//   document.getElementById("result").innerHTML = "You choose Rock!";
//   let rock = "rock";
//   gameLogic();
//   console.log(gameLogic() + rock);
//   console.log(winTest())

// });

// playerPaper.addEventListener("click", function () {
//   document.getElementById("result").innerHTML = "You choose Paper!";
//   gameLogic();
// });

// playerScissor.addEventListener("click", function () {
//   document.getElementById("result").innerHTML = "You choose Scissor!";
//   gameLogic();
// });

// let gameLogic = function () {
//   const random = Math.random();
//   if (random < 0.35) {
//     return "rock";
//   } else if (random <= 0.65) {
//     return "paper";
//   } else {
//     return "scissor";
//   }
// };

//  function winTest() {
//   if(gameLogic() == rock){
//     return 'draw'
//   }else{
//     return 'losing'
//   }
// }
