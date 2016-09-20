import { reach, range } from 'lodash'
import Background from '../background'
import StretchyChoices from '../choices'
import questions from '../questions'

var questionGroups = {};

function preload() {
    const load = this.game.load

    loadIcons(load)
    Background.preload(load)
    StretchyChoices.preload(load)

    load.onLoadComplete.addOnce(function(){
        if(navigator.splashscreen)
            navigator.splashscreen.hide()
    });
}

function create() {
    const game = this.game;
    game.stage.backgroundColor='#ffffff';
    questionGroups['2a'] = addQuestion(game, questions['2a'])
    questionGroups['2b'] = addQuestion(game, questions['2b'])

    questionGroups['2a'].visible = true;
}

function loadIcons(load){
    const icons = range(1,6).map( i => `feeling-${i}` )
    icons.push('magnifying-glass', 'magnifying-glass-checked')
    icons.forEach(img => load.image(img, `img/${img}.png`))
}

function addQuestion(game, question){
    var questionGroup = game.add.group()
    questionGroup.visible = false;
    question.create(game, questionGroup)
    return questionGroup;
}

function getGroupById(groupId){
    return questionGroups[groupId];
}

export default { preload, create, getGroupById }
