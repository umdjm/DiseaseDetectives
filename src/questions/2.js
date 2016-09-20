import { addText, addResponse } from './utils'

function create(game, group) {
    addText(game, group, "Are you sick with a cold today?", 80);
    addResponse(game, group, "Yes", 200, "2b");
    addResponse(game, group, "No", 300, "done");
}

export default { create }
