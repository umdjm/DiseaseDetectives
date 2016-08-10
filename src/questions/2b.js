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

    game.stage.backgroundColor='#ff9999';
    let bg = new Background(game, 0xff9999)
    let choices = new StretchyChoices(game, 0)
    addText(game, " Do you have any of these symptoms?", 80);

    addResponse(game, " Continue", 900, "2c");
}

export default { preload, create }
