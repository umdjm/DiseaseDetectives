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
    let bg = new Background(game, 0x99ff99)
    let choices = new StretchyChoices(game, 0)
    addText(game, " Do you have any of these symptoms?", 80);

    addResponse(game, " Continue", 900, "2c");
}

export default { preload, create }
