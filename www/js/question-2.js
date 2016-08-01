window.questions = window.questions || {};

(function(ns, lib) {
	ns['2'] = {

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
