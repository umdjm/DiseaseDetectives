const CHOICES = ['stuffyNose', 'fever', 'chills', 'bodyAche', 'soreThroat', 'headAche']

export default class StretchyChoices {

    static preload(load) {
        Choice.preload(load)
        Connector.preload(load)
    }

    constructor(game, offset) {
        const group = this.group = game.add.group()

        const addChoice = (x, y, name) => {
            const choice = new Choice(game, x, y, name)
            group.add(choice)
        }

        addChoice(game.world.centerX, game.world.centerY - 150, CHOICES[0 + offset])
        addChoice(game.world.centerX * 1.5, game.world.centerY + 150, CHOICES[1 + offset])
        addChoice(game.world.centerX * 0.5, game.world.centerY + 150, CHOICES[2 + offset])
    }

}

export class Choice extends Phaser.Sprite {

    static preload(load) {
        CHOICES.forEach( name => {
            load.image(name, `img/${name}.png`)
            load.image(`${name}On`, `img/${name}On.png`) 
        })
    }

    constructor(game, x, y, name) {
        super(game, x, y, name) 

        this._name = name
        this._selected = false

        this.anchor.setTo(0.5, 0.5)
        this.scale.setTo(0.5, 0.5)

        let onChange = new Phaser.Signal()
        Object.assign(this.events, { onChange })

        this.inputEnabled = true
        this.events.onInputDown.add( (sprite, pointer) => {
           this.selected = !this.selected 
        })
        
    }

    get selected() { return this._selected }

    set selected(value) {
        const prevValue = this._selected;
        this._selected = value;

        if(value != prevValue) {
            const name = this._name
            this.loadTexture( value ? `${name}On` : name)
            this.events.onChange.dispatch({ name, value })
        }
    }
}

export class Connector extends Phaser.Sprite {

    static preload(load) {
        load.image('connector', 'img/connection.png')         
    }

    constructor(game, lhs, rhs, radius) {
        super(game, x, y, 'connector')
       
        let point = Phaser.Point
            .subtract(lhs.world, rhs.world)
            .multiply(0.5, 0.5)
            .add(lhs.world.x, rhs.world.x)

        this.x = point.x 
        this.y = point.y    
    }

    update() {

    }

}

const MAX_TRIES = 500

export class Layout {

    constructor(game) { 
        this.game = game
        this._sprites = []
        this.margin = 100
        this.minDistance = 170 
    }

    add(sprite) {
        const game = this.game
        const margin = this.margin
        const sprites = this._sprites

        const minx = margin
        const maxx = game.width - margin
        const miny = margin
        const maxy = game.height - margin

        const minDistSq = this.minDistance ** 2 
        const tooClose = (x, y, sprite) =>  {
            const distSq = (sprite.x - x) ** 2 + (sprite.y - y) ** 2       
            return distSq <= minDistSq
        }

        let tries = 0
        let found = false
        while(!found && tries < MAX_TRIES) {
            let x = game.rnd.integerInRange(minx, maxx)
            let y = game.rnd.integerInRange(miny, maxy)
           
            found = true 
            for(let sprite of sprites) {
                if(tooClose(x, y, sprite)) {
                    found = false;
                    break;
                }
            }

            if(found) {
                sprite.x = x 
                sprite.y = y

                console.log(JSON.stringify({x,y}))
                this._sprites.push(sprite)
                break
            }
            else 
                tries++
        }
    }

}
