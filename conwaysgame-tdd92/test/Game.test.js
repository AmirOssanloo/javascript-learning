import { expect } from 'chai';
import Cell from '../src/Cell';
import CellState from '../src/CellState';
import Game from '../src/Game';

const { ALIVE, DEAD } = CellState;
const aliveState = [[ALIVE, ALIVE, ALIVE], [ALIVE, ALIVE, ALIVE],[ALIVE, ALIVE, ALIVE]];
const deadState = [[DEAD, DEAD, DEAD], [DEAD, DEAD, DEAD],[DEAD, DEAD, DEAD]];
const mixedState = [[ALIVE, DEAD, ALIVE], [DEAD, ALIVE, DEAD],[ALIVE, DEAD, ALIVE]];

describe('Game', () => {
  it('Should be initialized with a given state', () => {
    const game = new Game(deadState);
    const nextState = [
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)]
    ];

    expect(game.state).to.deep.equal(nextState);
  });

  it('Should retrieve a cell at a given row and column', () => {
    const deadGame = new Game(deadState);
    const deadCell = deadGame.getCellAt(0, 0);

    expect(deadCell).to.be.an.instanceOf(Cell);
    expect(deadCell.state).to.equal(deadState[0][0]);

    const aliveGame = new Game(aliveState);
    const aliveCell = aliveGame.getCellAt(0, 0);

    expect(aliveCell).to.be.an.instanceOf(Cell);
    expect(aliveCell.state).to.equal(aliveState[0][0]);
  });

  it('Should get the number of alive aliveNeighbours for a given cell', () => {
    const aliveGame = new Game(aliveState);
    const aliveNeighbours = aliveGame.getNumOfAliveNeighboursAt(1, 1);

    expect(aliveNeighbours.ALIVE).to.equal(8);

    const deadGame = new Game(deadState);
    const deadNeighbours = deadGame.getNumOfAliveNeighboursAt(1, 1);

    expect(deadNeighbours.ALIVE).to.equal(0);

    const mixedGame = new Game(mixedState);
    const mixedNeighbours = mixedGame.getNumOfAliveNeighboursAt(1, 1);

    expect(mixedNeighbours.ALIVE).to.equal(4);
  });
});
