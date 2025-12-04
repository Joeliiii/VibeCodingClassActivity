// card.test.js
import Card from '../card.js';

describe('Card', () => {
    test('stores rank, suit, and value', () => {
        const card = new Card('A', '♠', 11);
        expect(card.rank).toBe('A');
        expect(card.suit).toBe('♠');
        expect(card.value).toBe(11);
    });

    test('toString returns rank + suit', () => {
        const card = new Card('10', '♥', 10);
        expect(card.toString()).toBe('10♥');
    });
});
