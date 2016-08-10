import StretchyChoices from '../choices'
import Background from '../background'

import {
    addText,
    addResponse
} from './utils'

function preload() {
    const load = this.game.load

    StretchyChoices.preload(load)
    Background.preload(load)
}

function create() {
    let game = this.game;

    game.stage.backgroundColor='#cc99cc';
    let bg = new Background(game, 0xcc99cc)
    let choices = new StretchyChoices(game, 3)
    addText(game, " Do you have any aches or pains?", 80);

    addResponse(game, " Continue", 900, "done");
}

export default { preload, create }
