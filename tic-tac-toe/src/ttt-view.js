const Game = require("../ttt_node/game");
const MoveError = require("../ttt_node/moveError.js");

class View {
  constructor(game, el) {
    this.el = el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    let ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement('li');
        li.dataset.pos = [i, j];
        ul.appendChild(li);
      }
    }
    this.el.appendChild(ul);
  }
  
  bindEvents() {
    this.handleClick()
  }

  handleClick(e) {
    const cells = document.querySelector(".ttt > ul");
    cells.addEventListener("click", (e) =>{
      this.makeMove(e.target)
      // console.log('click registered')
    })
  }

  makeMove(square) {
    let pos = square.dataset.pos;
    let newPos = [];
    newPos.push(parseInt(pos[0]));
    newPos.push(parseInt(pos[2]));
    // console.log(newPos)
    try {
      this.game.playMove(newPos);
    } catch (error) {
      alert(error.msg)
    }
    // li.dataset.mark = this.game.currentPlayer; //marks stored as string <"data-mark=x"
    square.classList.add(this.game.currentPlayer); 
  }

}

module.exports = View;
