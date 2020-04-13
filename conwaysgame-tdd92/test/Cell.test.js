import { expect } from 'chai';
import Cell from '../src/Cell';
import CellState from '../src/CellState';

describe('Cell', () => {
  it('Should be initialized with a CellState', () => {
    const cellAlive = new Cell(CellState.ALIVE);
    expect(cellAlive.state).to.equal(CellState.ALIVE);

    const cellDead = new Cell(CellState.DEAD);
    expect(cellDead.state).to.equal(CellState.DEAD);
  });

  it('Should throw error if not initialized with a CellState', () => {
    expect(() => {
      new Cell(undefined)
    }).to.throw();
  });

  it('Should die if it has fewer than 2 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith0Neighbours = cell.getNextState(0);
    expect(nextStateWith0Neighbours).to.equal(CellState.DEAD);

    const nextStateWith1Neighbours = cell.getNextState(1);
    expect(nextStateWith1Neighbours).to.equal(CellState.DEAD);
  });

  it('Should live with 2 or 3 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);

    const nextStateWith2Neighbours = cell.getNextState(2);
    expect(nextStateWith2Neighbours).to.equal(CellState.ALIVE);

    const nextStateWith3Neighbours = cell.getNextState(3);
    expect(nextStateWith3Neighbours).to.equal(CellState.ALIVE);
  });

  it('Should die with more than 3 neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith4Neighbours = cell.getNextState(4);
    expect(nextStateWith4Neighbours).to.equal(CellState.DEAD);

    const nextStateWith9Neighbours = cell.getNextState(9);
    expect(nextStateWith9Neighbours).to.equal(CellState.DEAD);
  });

  it('Should stay dead with more than 3 neighbours', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith4Neighbours = cell.getNextState(4);
    expect(nextStateWith4Neighbours).to.equal(CellState.DEAD);

    const nextStateWith9Neighbours = cell.getNextState(9);
    expect(nextStateWith9Neighbours).to.equal(CellState.DEAD);
  });

  it('Should come alive with exactly 3 neighbours', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith3Neighbours = cell.getNextState(3);
    expect(nextStateWith3Neighbours).to.equal(CellState.ALIVE);
  });
});
