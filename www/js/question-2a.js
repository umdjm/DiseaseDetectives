window.questions = window.questions || {};

(function(ns, lib) {
	ns['2a'] = {

		preload: function() {
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "How do you feel today, compared to yesterday?", 80);
			lib.addResponse(game, "Better", 200, "2b");
			lib.addResponse(game, "Worse", 300, "2b");
			lib.addResponse(game, "The Same", 400, "2b");

		}
	}
})(window.questions, window.questionLib);
