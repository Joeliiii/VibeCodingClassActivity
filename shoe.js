// shoe.js
import Card from './card.js';

export default class Shoe {
    constructor(numDecks = 6) {
        this.numDecks = numDecks;
        this.cards = [];
        this.buildDecks();
        this.shuffle();
    }

    buildDecks() {
        this.cards = [];

        const suits = ['♠', '♥', '♦', '♣'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (let deck = 0; deck < this.numDecks; deck++) {
            for (const suit of suits) {
                for (const rank of ranks) {
                    let value;

                    if (rank === 'A') {
                        value = 11; // Iteration 1: treat Ace as 11 only
                    } else if (['J', 'Q', 'K'].includes(rank)) {
                        value = 10;
                    } else {
                        value = parseInt(rank, 10);
                    }

                    this.cards.push(new Card(rank, suit, value));
                }
            }
        }
    }

    shuffle() {
        // Fisher–Yates shuffle
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard() {
        return this.cards.pop() || null;
    }

    getRemainingCount() {
        return this.cards.length;
    }
}
