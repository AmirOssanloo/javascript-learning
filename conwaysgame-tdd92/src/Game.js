import Cell from "./Cell";

function Game(state) {
  this.state = state.map(row => row.map(cellState => {
    return new Cell(cellState);
  }));
};

Game.prototype.getCellAt = function(x, y) {
  return this.state[x][y];
};

Game.prototype.getNumOfAliveNeighboursAt = function(x, y) {

};

export default Game;
