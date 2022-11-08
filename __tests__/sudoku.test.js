import { TestScheduler } from 'jest';
import Game from './..src/triangle.js';

describe ('Game', () => {

    test('should create a game object with the property turn', () => {
        const game1 = new Game();
        expect(game.turn).toEqual(1);
    });
});