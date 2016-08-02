import { addText, addResponse } from './utils'

function create() {
    let game = this.game;

    game.stage.backgroundColor='#ffffff';
    addText(game, "How do you feel today, compared to yesterday?", 80);
    addResponse(game, "Better", 200, "2b");
    addResponse(game, "Worse", 300, "2b");
    addResponse(game, "The Same", 400, "2b");
}

export default { create }
