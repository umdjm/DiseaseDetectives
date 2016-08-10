import { range } from 'lodash'
import { addText, addIconResponse, addSplash } from './utils'
import Background from '../background'
import StretchyChoices from '../choices'

function preload() {
    const load = this.game.load;
    Background.preload(load)
    StretchyChoices.preload(load)
    load.image("splash", 'img/splash.png')
}

function create() {    
    const game = this.game;
    addSplash(game, 'splash', '2');
}

export default { preload, create }
