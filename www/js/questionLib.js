window.questionLib = window.questionLib || {};

(function(ns) {
    ns.addText = function (game, text, position) {
        var style = {align: "center"};
        var newText = game.add.text(game.world.centerX, position, text, style);
        newText.anchor.setTo(0.5, 0, 5);
        return newText;
    };

    ns.addResponse = function (game, text, position, next) {
        response = ns.addText(game, text, position);

        response.inputEnabled = true;
        response.events.onInputDown.add(function (sprite, pointer) {
            game.state.start(next);
        });
    };

    ns.addIconResponse = function (game, icon, position, next){
        var icon = game.add.sprite(game.world.centerX, position, icon);
        icon.anchor.setTo(0.5, 0,5)
        icon.scale.setTo(0.2, 0.2)

        icon.inputEnabled = true;
        icon.events.onInputDown.add(function(sprite, pointer) {
            game.state.start(next);
        });
    };

    ns.addMultiResponse = function (game, text, position, next) {

        var icon = game.add.sprite(50, position, "magnifying-glass");
        icon.inputEnabled = true;

        function markChecked(sprite, pointer) {
            icon.loadTexture("magnifying-glass-checked");
        };
        icon.events.onInputDown.add(markChecked);

        var response = game.add.text(200, position, text);
        response.inputEnabled = true;
        response.events.onInputDown.add(markChecked);
    };

    ns.loadMultiRepsonseIcons = function(game){
        ['magnifying-glass', 'magnifying-glass-checked']
            .forEach( function(img) {
                game.load.image(img, 'img/' + img + '.png');
            });
    }

})(window.questionLib);
