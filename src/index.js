import { each } from 'lodash'
import questions from './questions'

function onDeviceReady() {
    const game = new Phaser.Game(768, 1024, Phaser.AUTO, 'game-container')
   
    each(questions, (state, key) => game.state.add(key, state) ) 
    //game.state.start('1')
    game.state.start('2b')

    const onPause = e => { game.paused = true }
    const onResume = e => { game.paused = false }

    document.addEventListener('pause', onPause, false)
    document.addEventListener('resume', onResume, false)
}

if(window.cordova)
    document.addEventListener('deviceready', onDeviceReady, false)
else
    onDeviceReady()
