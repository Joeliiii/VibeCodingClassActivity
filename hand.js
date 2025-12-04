// hand.js
export default class Hand {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        if (card) {
            this.cards.push(card);
        }
    }

    getTotal() {
        // Iteration 1: naive total (Ace always 11)
        // We'll fix Ace logic in Iteration 2.
        return this.cards.reduce((sum, card) => sum + card.value, 0);
    }

    toString() {
        if (this.cards.length === 0) {
            return '(no cards)';
        }
        return this.cards.map(card => card.toString()).join(' ');
    }

    clear() {
        this.cards = [];
    }
}
