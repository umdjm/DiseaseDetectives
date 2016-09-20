import { each } from 'lodash'
import survey from './states/survey'

function onDeviceReady() {
    const game = new Phaser.Game(768, 1024, Phaser.CANVAS, 'game-container')

    game.state.add('survey', survey)
    game.state.start('survey');

    const onPause = e => { game.paused = true }
    const onResume = e => { game.paused = false }

    document.addEventListener('pause', onPause, false)
    document.addEventListener('resume', onResume, false)
}

if(window.cordova)
    document.addEventListener('deviceready', onDeviceReady, false)
else
    onDeviceReady()
