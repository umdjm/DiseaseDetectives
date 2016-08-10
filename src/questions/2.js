import Background from '../background'
import { addText, addResponse } from './utils'

function preload() {
    const load = this.game.load;
    Background.preload(load)
    load.onLoadComplete.addOnce(() => navigator.splashscreen.hide());
}

function create() {
    const  game = this.game;

    game.stage.backgroundColor='#b2b2ff';
    let bg = new Background(game, 0xb2b2ff)
    addText(game, "Are you sick with a cold today?", 80);
    addResponse(game, "Yes", 200, "2b");
    addResponse(game, "No", 300, "done");
}

export default { preload, create }
