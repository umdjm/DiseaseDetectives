import Background from '../background'
import { addText, addResponse } from './utils'

function create(game, group) {
    game.stage.backgroundColor='#99ff99';
    let bg = new Background(game, 0x99ff99)

    game.world.bringToTop(group);

    addText(game, group, "Do you feel any different today?", 80);
    addResponse(game, group, "Better", 200, "2b");
    addResponse(game, group, "Worse", 300, "2b");
    addResponse(game, group, "The Same", 400, "2b");
}

export default { create }
