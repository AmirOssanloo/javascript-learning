import CellState from './CellState';

function Cell(state) {
  this.state = state;
  this.neighbours = 0;
};

Cell.prototype.getNextState = function(neighbours) {
  if (this.state === CellState.ALIVE) {
    if (neighbours === 2 || neighbours === 3) {
      return CellState.ALIVE;
    }
  }

  if (neighbours === 3) {
    return CellState.ALIVE;
  }

  return CellState.DEAD;
};

export default Cell;
