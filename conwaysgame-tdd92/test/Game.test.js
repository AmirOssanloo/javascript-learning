import { expect } from 'chai';
import Game from '../src/Game';

describe('Game', () => {
  it('Should be initialized with a given state', () => {
    const state = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    const game = new Game(state);
    expect(game.state).to.deep.equal(state);
  });
});
