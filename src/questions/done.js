import Background from '../background'
import { addText } from './utils'

function preload() {
    const load = this.game.load;
    Background.preload(load)
}

function create() {
    let game = this.game;

    game.stage.backgroundColor='#99ff99';
    let bg = new Background(game, 0x99ff99)
    addText(game, "Thank you for \n completing the survey", game.world.centerY);
}

export default { preload, create }
