const View = require("./ttt-view.js"); // require appropriate file
const Game = require("../ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let game = new Game();
  let view = new View(game, document.querySelector(".ttt"));

});
