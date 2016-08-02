import { 
    loadMultiRepsonseIcons, 
    addText, 
    addMultiResponse, 
    addResponse 
} from './utils'

function preload() { 
    loadMultiRepsonseIcons(this.game)
}

function create() {
    let game = this.game;

    game.stage.backgroundColor='#ffffff';
    addText(game, "Did any of the following happen today?", 80);
    addMultiResponse(game, "I was too sick to go to school", 200);
    addMultiResponse(game, "I had to go see the doctor", 300);
    addResponse(game, "Continue", 400, "done");
}

export default { preload, create }
