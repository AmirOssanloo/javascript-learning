import Game from './Game';
import CellState from './Cell/CellState';
const { ALIVE, DEAD} = CellState;

const initialGameState = [
  [DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD]
];

export {
  Game,
  CellState,
  initialGameState
};
