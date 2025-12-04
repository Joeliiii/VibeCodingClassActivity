// player.test.js
import Player from '../player.js';
import Participant from '../participant.js';
import Hand from '../hand.js';

describe('Player', () => {
    test('extends Participant and has default name "Player"', () => {
        const player = new Player();
        expect(player).toBeInstanceOf(Participant);
        expect(player.name).toBe('Player');
        expect(player.hand).toBeInstanceOf(Hand);
    });

    test('can be constructed with custom name', () => {
        const player = new Player('Alice');
        expect(player.name).toBe('Alice');
    });
});
