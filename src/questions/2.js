import { addText, addResponse } from './utils'

function create() {
    const  game = this.game;
    game.stage.backgroundColor='#ffffff';
    addText(game, "Are you sick with a cold today?", 80);
    addResponse(game, "Yes", 200, "2a");
    addResponse(game, "No", 300, "3");
}

export default { create }
