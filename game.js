// game.js
import Shoe from './shoe.js';
import Player from './player.js';
import Dealer from './dealer.js';

export default class Game {
    constructor() {
        this.shoe = null;
        this.player = null;
        this.dealer = null;

        // Cache DOM elements we need
        this.dealerCardsEl = document.getElementById('dealer-cards');
        this.dealerTotalEl = document.getElementById('dealer-total');
        this.playerCardsEl = document.getElementById('player-cards');
        this.playerTotalEl = document.getElementById('player-total');
    }

    init() {
        // Create a new 6-deck shoe and participants
        this.shoe = new Shoe(6);
        this.player = new Player();
        this.dealer = new Dealer();

        // Do a simple initial deal
        this.dealInitialCards();
        this.render();
    }

    dealInitialCards() {
        // Clear hands just in case
        this.player.resetHand();
        this.dealer.resetHand();

        // Deal two cards to each (player first, then dealer, etc.)
        this.player.hand.addCard(this.shoe.drawCard());
        this.dealer.hand.addCard(this.shoe.drawCard());
        this.player.hand.addCard(this.shoe.drawCard());
        this.dealer.hand.addCard(this.shoe.drawCard());
    }

    render() {
        // Player
        if (this.player && this.playerCardsEl && this.playerTotalEl) {
            this.playerCardsEl.textContent = this.player.hand.toString();
            this.playerTotalEl.textContent = `Total: ${this.player.hand.getTotal()}`;
        }

        // Dealer
        if (this.dealer && this.dealerCardsEl && this.dealerTotalEl) {
            this.dealerCardsEl.textContent = this.dealer.hand.toString();
            this.dealerTotalEl.textContent = `Total: ${this.dealer.hand.getTotal()}`;
        }
    }
}
