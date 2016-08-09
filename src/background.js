import { range } from 'lodash'

export default class Background {

    static preload(load) {
        range(1,7).each( i => load.image(`ring${i}`, `img\ring${i}.png`) )
    }

    constructor(game) {
        this.game = game;
        this.group = game.add.group();

        range(6,0)
            .map( i => {
                let ring = new Phaser.Sprite(game, `ring${i}`)

            })
    }

}
