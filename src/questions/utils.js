import survey from '../states/survey'

export function addText(game, group, text, position) {
    var style = {align: "center", font: "32px Komikax", fill: "white"};
    var newText = game.add.text(game.world.centerX, position, text, style, group);
    newText.anchor.setTo(0.5, 0, 5);
    newText.stroke = "black";
    newText.strokeThickness = 10;
    return newText;
}

export function addResponse(game, group, text, position, nextGroupId) {
    var response = addText(game, group, text, position);

    response.inputEnabled = true;
    response.events.onInputDown.add(function(){
        var nextGroup = survey.getGroupById(nextGroupId);
        group.visible = false;
        nextGroup.visible = true;
    });
}

export function addIconResponse(game, group, image, position, next){
    var icon = group.create(game.world.centerX, position, image);
    icon.anchor.setTo(0.5, 0,5)
    icon.scale.setTo(0.2, 0.2)

 //   icon.inputEnabled = true;
 //   icon.events.onInputDown.add(next);
}


export function addSplash(game, group, image, next){
    var icon = group.create(game.world.centerX, game.world.centerY, image);
    icon.anchor.setTo(0.5, 0.5)
    icon.scale.setTo(0.5, 0.5)

    icon.inputEnabled = true;
    icon.events.onInputDown.add(next);
}

export function addMultiResponse(game, group, text, position, next) {
    var icon = group.create(50, position, "magnifying-glass");
    icon.inputEnabled = true;

    function markChecked(sprite, pointer) {
        icon.loadTexture("magnifying-glass-checked");
    };
    icon.events.onInputDown.add(markChecked);

    var response = game.add.text(200, position, text, {}, group);
    response.inputEnabled = true;
    response.events.onInputDown.add(markChecked);
}


