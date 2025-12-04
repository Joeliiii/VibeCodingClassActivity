// dealer.js
import Participant from './participant.js';

export default class Dealer extends Participant {
    constructor(name = 'Dealer') {
        super(name);
    }
}
