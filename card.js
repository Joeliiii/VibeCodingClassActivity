// card.js
export default class Card {
    constructor(rank, suit, value) {
        this.rank = rank;   // '2'...'10', 'J', 'Q', 'K', 'A'
        this.suit = suit;   // '♠', '♥', '♦', '♣' (or 'Spades', etc.)
        this.value = value; // numeric value used for blackjack (2-11)
    }

    toString() {
        // Simple text representation, e.g. "A♠" or "10♥"
        return `${this.rank}${this.suit}`;
    }
}
