// hand.test.js
import Hand from '../hand.js';
import Card from '../card.js';

describe('Hand', () => {
    test('starts empty', () => {
        const hand = new Hand();
        expect(hand.cards).toHaveLength(0);
        expect(hand.toString()).toBe('(no cards)');
    });

    test('addCard adds cards to the hand', () => {
        const hand = new Hand();
        const card = new Card('5', '♣', 5);

        hand.addCard(card);
        expect(hand.cards).toHaveLength(1);
        expect(hand.cards[0]).toBe(card);
    });

    test('getTotal sums card values (naive Ace as 11 for Iteration 1)', () => {
        const hand = new Hand();
        hand.addCard(new Card('5', '♣', 5));
        hand.addCard(new Card('A', '♠', 11));

        expect(hand.getTotal()).toBe(16);
    });

    test('clear removes all cards', () => {
        const hand = new Hand();
        hand.addCard(new Card('7', '♦', 7));
        hand.addCard(new Card('9', '♥', 9));

        expect(hand.cards).toHaveLength(2);

        hand.clear();
        expect(hand.cards).toHaveLength(0);
        expect(hand.toString()).toBe('(no cards)');
    });
});
