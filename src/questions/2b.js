import StretchyChoices from '../choices'
import Background from '../background'

import { 
    addText,
    addResponse
} from './utils'

function create(game, group) {
    game.world.bringToTop(group);

  //  let choices = new StretchyChoices(game, 0)
    addText(game, group, " Do you have any of these symptoms?", 80);

    addResponse(game, group, " Continue", 900, "2c");
}

export default { create }
