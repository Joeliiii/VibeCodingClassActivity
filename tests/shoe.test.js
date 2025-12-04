// shoe.test.js
import Shoe from '../shoe.js';
import Card from '../card.js';

describe('Shoe', () => {
    test('builds a 6-deck shoe with 312 cards by default', () => {
        const shoe = new Shoe(); // default is 6
        expect(shoe.cards.length).toBe(6 * 52);
    });

    test('buildDecks rebuilds cards', () => {
        const shoe = new Shoe(2);
        expect(shoe.cards.length).toBe(104);

        // simulate draw
        shoe.drawCard();
        shoe.drawCard();
        expect(shoe.cards.length).toBe(102);

        // rebuild
        shoe.buildDecks();
        expect(shoe.cards.length).toBe(104);
    });

    test('drawCard returns a Card and reduces count', () => {
        const shoe = new Shoe(1);
        const initialCount = shoe.getRemainingCount();

        const card = shoe.drawCard();
        expect(card).toBeInstanceOf(Card);
        expect(shoe.getRemainingCount()).toBe(initialCount - 1);
    });

    test('shuffle changes the card order (likely)', () => {
        const shoe1 = new Shoe(1);
        const shoe2 = new Shoe(1);

        // Force same initial build and then manually copy/shuffle to compare
        shoe1.buildDecks();
        shoe2.cards = [...shoe1.cards];
        shoe2.shuffle();

        // Not guaranteed, but very likely different
        const sameOrder = shoe1.cards.every((c, i) => c.toString() === shoe2.cards[i].toString());
        expect(sameOrder).toBe(false);
    });
});
