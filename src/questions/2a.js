import StretchyChoices from '../choices'
import Background from '../background'
import { addText, addResponse } from './utils'

function preload() {
    const load = this.game.load;
    Background.preload(load)
}

function create() {
    let game = this.game;

    game.stage.backgroundColor='#99ff99';
    let bg = new Background(game, 0x99ff99)

    addText(game, "Do you feel any different today?", 80);
    addResponse(game, "Better", 200, "2b");
    addResponse(game, "Worse", 300, "2b");
    addResponse(game, "The Same", 400, "2b");
}

export default { preload, create }
