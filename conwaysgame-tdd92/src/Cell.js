import CellState from './CellState';

function Cell(state) {
  console.log('State:', state, CellState.ALIVE);
  if (state !== CellState.ALIVE || state !== CellState.DEAD) {
    throw new Error('Invalid cell state');
  }

  this.state = state;
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
