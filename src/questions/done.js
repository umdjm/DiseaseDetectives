import { addText } from './utils'

function create() {
    let game = this.game;
    game.stage.backgroundColor='#ffffff';
    addText(game, "Thank you for completing the survey", 80);
}

export default { create }
