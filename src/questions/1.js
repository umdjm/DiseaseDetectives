import { addText, addIconResponse } from './utils'

function create(game, group) {
    addText(game, group, "How are you feeling today?", 80);
    addIconResponse(game, group, 'feeling-1', 200, '2');
    addIconResponse(game, group, 'feeling-2', 300, '2');
    addIconResponse(game, group, 'feeling-3', 400, '2');
    addIconResponse(game, group, 'feeling-4', 500, '2');
    addIconResponse(game, group, 'feeling-5', 600, '2');
}

export default { create }
