import { range } from 'lodash'
import { addText, addIconResponse } from './utils'

function preload() {
    const load = this.game.load
    const icons = range(1,6).map( i => `feeling-${i}` )

    icons.forEach(img => load.image(img, `img/${img}.png`))
}

function create() {    
    const game = this.game;
    
    game.stage.backgroundColor='#ffffff';
    addText(game, "How are you feeling today?", 80);
    addIconResponse(game, 'feeling-1', 200, '2');
    addIconResponse(game, 'feeling-2', 300, '2');
    addIconResponse(game, 'feeling-3', 400, '2');
    addIconResponse(game, 'feeling-4', 500, '2');
    addIconResponse(game, 'feeling-5', 600, '2');
}

export default { preload, create }
