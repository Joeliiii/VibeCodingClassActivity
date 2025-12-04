// participant.js
import Hand from './hand.js';

export default class Participant {
    constructor(name) {
        this.name = name;
        this.hand = new Hand();
    }

    resetHand() {
        this.hand.clear();
    }
}
