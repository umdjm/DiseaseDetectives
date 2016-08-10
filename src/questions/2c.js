import StretchyChoices from '../choices'
import Background from '../background'

import {
    loadMultiRepsonseIcons,
    addText,
    addMultiResponse,
    addResponse
} from './utils'

function preload() {
    const load = this.game.load

    StretchyChoices.preload(load)
    Background.preload(load)
    loadMultiRepsonseIcons(this.game)
}

function create() {
    let game = this.game;

    game.stage.backgroundColor='#ffffff';
    let bg = new Background(game, 0xcc99cc)
    let choices = new StretchyChoices(game, 3)
    addText(game, " Do you have any aches or pains?", 80);

    addResponse(game, " Continue", 900, "2d");
}

export default { preload, create }
