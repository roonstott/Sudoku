import { Board } from '../src/sudoku.js';

describe('Board', () => {

    test('should create a game object with the property nine, an array of 1-9', () => {
        const board1 = new Board();
        expect(board1.nine[3]).toEqual(4);
    });

    

});