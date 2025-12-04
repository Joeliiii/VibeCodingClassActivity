// participant.test.js
import Participant from '../participant.js';
import Hand from '../hand.js';

describe('Participant', () => {
    test('has a name and a Hand', () => {
        const participant = new Participant('Tester');
        expect(participant.name).toBe('Tester');
        expect(participant.hand).toBeInstanceOf(Hand);
    });

    test('resetHand clears the hand', () => {
        const participant = new Participant('Tester');
        participant.hand.addCard({ value: 5 }); // fake card is fine here
        expect(participant.hand.cards).toHaveLength(1);

        participant.resetHand();
        expect(participant.hand.cards).toHaveLength(0);
    });
});
