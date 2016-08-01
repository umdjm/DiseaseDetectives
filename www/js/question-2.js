window.questions = window.questions || {};

(function(ns, lib) {
	ns['2'] = {
		addText: function(game, text, position){
			var style = { align: "center" };
			var newText = game.add.text(game.world.centerX, position, 'Yes', style);
			newText.anchor.setTo(0.5, 0,5);
			return newText;
		},

		addResponse: function(game, text, position, next){
			response= addText(game, text, position);

			response.inputEnabled = true;
			response.events.onInputDown.add(function(sprite, pointer) {
				game.state.start(next);
			});
		},

		preload: function() {
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
            lib.addText(game, "Are you sick with a cold today?", 80);
            lib.addResponse(game, "Yes", 200, "2a");
            lib.addResponse(game, "No", 300, "3");
		}
	}
})(window.questions, window.questionLib);
