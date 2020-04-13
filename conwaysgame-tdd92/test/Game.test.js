import { expect } from 'chai';
import Cell from '../src/Cell';
import CellState from '../src/CellState';
import Game from '../src/Game';

const { ALIVE, DEAD } = CellState;
const aliveState = [[ALIVE, ALIVE, ALIVE], [ALIVE, ALIVE, ALIVE],[ALIVE, ALIVE, ALIVE]];
const deadState = [[DEAD, DEAD, DEAD], [DEAD, DEAD, DEAD], [DEAD, DEAD, DEAD]];
const mixedState = [[ALIVE, DEAD, ALIVE], [DEAD, ALIVE, DEAD], [ALIVE, DEAD, ALIVE]];
const bigState = [[ALIVE, DEAD, ALIVE, ALIVE, DEAD, ALIVE, ALIVE, DEAD, ALIVE], [DEAD, ALIVE, DEAD, DEAD, ALIVE, DEAD, DEAD, ALIVE, DEAD], [ALIVE, DEAD, ALIVE, ALIVE, DEAD, ALIVE, ALIVE, DEAD, ALIVE], [DEAD, ALIVE, DEAD, DEAD, ALIVE, DEAD, DEAD, ALIVE, DEAD], [ALIVE, DEAD, ALIVE, ALIVE, DEAD, ALIVE, ALIVE, ALIVE, ALIVE], [DEAD, ALIVE, DEAD, DEAD, ALIVE, DEAD, DEAD, ALIVE, ALIVE]];

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

  it('Should get the number of alive neighbours for a given cell', () => {
    const aliveGame = new Game(aliveState);
    const aliveNeighbours = aliveGame.getNumOfAliveNeighboursAt(1, 1);
    expect(aliveNeighbours).to.equal(8);

    const deadGame = new Game(deadState);
    const deadNeighbours = deadGame.getNumOfAliveNeighboursAt(1, 1);
    expect(deadNeighbours).to.equal(0);

    const mixedGame = new Game(mixedState);
    const mixedNeighbours = mixedGame.getNumOfAliveNeighboursAt(1, 1);
    expect(mixedNeighbours).to.equal(4);
  });

  it('Should get the number of alive neighbours for a cell at the edge', () => {
    const topLeftGame = new Game(aliveState);
    const topLeftNeighbours = topLeftGame.getNumOfAliveNeighboursAt(0, 0);
    expect(topLeftNeighbours).to.equal(3);

    const bottomRightGame = new Game(aliveState);
    const bottomRightNeighbours = bottomRightGame.getNumOfAliveNeighboursAt(2, 2);
    expect(bottomRightNeighbours).to.equal(3);

    const bottomMiddleGame = new Game(aliveState);
    const bottomMiddleNeighbours = bottomMiddleGame.getNumOfAliveNeighboursAt(2, 1);
    expect(bottomMiddleNeighbours).to.equal(5);
  });

  it('Should get the number of alive neighbours for a cell in a big grid', () => {
    const bigGame = new Game(bigState);

    const middleNeighbours = bigGame.getNumOfAliveNeighboursAt(2, 3);
    expect(middleNeighbours).to.equal(3);

    const edgeNeighbours = bigGame.getNumOfAliveNeighboursAt(0, 7);
    expect(edgeNeighbours).to.equal(3);

    const cornerNeighbours = bigGame.getNumOfAliveNeighboursAt(5, 8);
    expect(cornerNeighbours).to.equal(3);
  });

  it('Should create the next state of the game', () => {
    const gameState = [
      [DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD]
    ];

    const game = new Game(gameState);
    const nextState = game.getNextState();

    const expectedState = [
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)]
    ];

    expect(nextState).to.deep.equal(expectedState);
  });
});
