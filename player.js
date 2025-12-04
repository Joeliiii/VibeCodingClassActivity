// player.js
import Participant from './participant.js';

export default class Player extends Participant {
    constructor(name = 'Player') {
        super(name);
    }
}
