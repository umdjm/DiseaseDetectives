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
    addText(game, "Which buttons show how you feel?", 80);
    addMultiResponse(game, "Cough", 200);
    addMultiResponse(game, "Sore Throat", 300);
    addMultiResponse(game, "Headache", 400);
    addMultiResponse(game, "Fever", 500);
    addResponse(game, "Continue", 600, "2c");
}

export default { preload, create }
