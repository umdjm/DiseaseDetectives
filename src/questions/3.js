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
    addText(game, "Did any of these other things happen today?", 80);
    addMultiResponse(game, "I went to the doctor", 200);
    addMultiResponse(game, "Someone in my family has a cold, but I feel fine", 300);
    addMultiResponse(game, "I have a friend who has a cold, but I feel fine", 400);
    addMultiResponse(game, "I got a flu vaccine (also called a flu shot!)", 500);
    addResponse(game, "Continue", 600, 'done');
}

export default { preload, create }
