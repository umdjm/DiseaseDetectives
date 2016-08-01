window.questions = window.questions || {};

(function(ns, lib) {
	ns['2c'] = {

		preload: function() {
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "Is anyone else in your family sick?", 80);
			lib.addResponse(game, "No - no one else is sick", 200, "done");
			lib.addResponse(game, "At least one grown-up", 300, "done");
			lib.addResponse(game, "At least one little sister or brother is sick", 400, "done");
			lib.addResponse(game, "At least one older sister or brother is sick", 500, "done");

		}
	}
})(window.questions, window.questionLib);
