import { range } from 'lodash'

export default class Background {

    static preload(load) {
        range(1,7).forEach( i => load.image(`ring${i}`, `img/ring${i}.png`) )
    }

    constructor(game, tint) {
        this.game = game;
        const group = this.group = game.add.group();

        const center = { x: game.width / 2, y: game.height / 2 }
        range(6,0)
            .map( i => {
                let ring = new Ring(game, center.x, center.y, i, tint)
                group.add(ring)
            })
    }

}

export class Ring extends Phaser.Sprite {

    constructor(game, x, y, index, tint) {
        super(game, x, y, `ring${index}`)

        this.tint = tint
        this.anchor.setTo(0.5, 0.5)
        this.scale.setTo(0.5, 0.5)

        game.physics.enable(this, Phaser.Physics.ARCADE)

        this.body.angularVelocity = (index % 2 == 0) ?  Ring.SPEED : -Ring.SPEED
    }
}

Ring.SPEED = 50
