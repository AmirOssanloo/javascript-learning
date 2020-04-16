import Cell from "./Cell/Cell";
import CellState from "./Cell/CellState";

function Game(state) {
  this.rows = state.length;
  this.cols = state[0].length;
  this.state = state.map(row => row.map(cellState => {
    return new Cell(cellState);
  }));
};

Game.prototype.getCellAt = function(row, col) {
  return this.state[row][col];
};

Game.prototype.setCellAt = function(state, row, col) {
  this.state[row][col] = state;
};

Game.prototype.getNextState = function() {
  return this.state.map((row, x) => row.map((cell, y) => {
    const neighbours = this.getNumOfAliveNeighboursAt(x, y);
    const nextState = cell.getNextState(neighbours);
    return new Cell(nextState);
  }));
};

Game.prototype.getNumOfAliveNeighboursAt = function(row, col) {
  const startRow = Math.max(0, row - 1);
  const endRow = Math.min(row + 1, this.rows - 1);
  const startCol = Math.max(0, col - 1);
  const endCol = Math.min(col + 1, this.cols - 1);
  let neighbours = 0;

  for (var x = startRow; x <= endRow; x++) {
    for( var y = startCol; y <= endCol; y++) {
      if (x !== row || y !== col) {
        if (this.state[x][y].state === CellState.ALIVE) {
          neighbours++;
        }
      }
    }
  }

  return neighbours;
};

export default Game;
