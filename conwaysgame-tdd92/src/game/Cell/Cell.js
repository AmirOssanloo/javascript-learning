import CellState from './CellState';

function Cell(state) {
  if (state !== CellState.ALIVE && state !== CellState.DEAD) {
    throw new Error('Invalid cell state');
  }

  this.state = state;
};

Cell.prototype.getNextState = function(neighbours) {
  if (this.state === CellState.ALIVE) {
    if (neighbours === 2 || neighbours === 3) {
      return this.state;
    }
  }

  if (neighbours === 3) {
    return CellState.ALIVE;
  }

  return CellState.DEAD;
};

export default Cell;
