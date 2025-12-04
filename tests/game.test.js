// game.test.js
import Game from '../game.js';

describe('Game (Iteration 1)', () => {
    beforeEach(() => {
        // Minimal DOM structure matching index.html expectations
        document.body.innerHTML = `
            <div id="dealer-cards"></div>
            <div id="dealer-total"></div>
            <div id="player-cards"></div>
            <div id="player-total"></div>
        `;
    });

    test('init creates shoe, player, dealer and deals initial cards', () => {
        const game = new Game();
        game.init();

        // Shoe should exist
        expect(game.shoe).toBeDefined();
        expect(game.shoe.getRemainingCount()).toBe(6 * 52 - 4); // 4 cards dealt

        // Player and dealer should exist and have 2 cards each
        expect(game.player).toBeDefined();
        expect(game.dealer).toBeDefined();

        expect(game.player.hand.cards.length).toBe(2);
        expect(game.dealer.hand.cards.length).toBe(2);
    });

    test('render updates DOM with card strings and totals', () => {
        const game = new Game();
        game.init(); // calls render inside

        const dealerCardsText = document.getElementById('dealer-cards').textContent;
        const dealerTotalText = document.getElementById('dealer-total').textContent;
        const playerCardsText = document.getElementById('player-cards').textContent;
        const playerTotalText = document.getElementById('player-total').textContent;

        expect(dealerCardsText).not.toBe('');
        expect(playerCardsText).not.toBe('');
        expect(dealerTotalText).toMatch(/^Total: \d+/);
        expect(playerTotalText).toMatch(/^Total: \d+/);
    });
});
