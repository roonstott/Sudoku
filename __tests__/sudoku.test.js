import { Game } from '../src/sudoku.js';

describe('Game', () => {

    test('should create a game object with the property turn', () => {
        const game1 = new Game(1);
        expect(game1.turn).toEqual(1);
    });
});