// dealer.test.js
import Dealer from '../dealer.js';
import Participant from '../participant.js';
import Hand from '../hand.js';

describe('Dealer', () => {
    test('extends Participant and has default name "Dealer"', () => {
        const dealer = new Dealer();
        expect(dealer).toBeInstanceOf(Participant);
        expect(dealer.name).toBe('Dealer');
        expect(dealer.hand).toBeInstanceOf(Hand);
    });

    test('can be constructed with custom name', () => {
        const dealer = new Dealer('House');
        expect(dealer.name).toBe('House');
    });
});
