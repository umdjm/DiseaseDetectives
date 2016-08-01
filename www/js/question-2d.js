window.questions = window.questions || {};

(function(ns, lib) {
	ns['2d'] = {

		preload: function() {
            lib.loadMultiRepsonseIcons(this.game);
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "Is anyone else in your family sick?", 80);
			lib.addMultiResponse(game, "No - no one else is sick", 200);
			lib.addMultiResponse(game, "At least one grown-up", 300);
			lib.addMultiResponse(game, "At least one little sister or brother is sick", 400);
			lib.addMultiResponse(game, "At least one older sister or brother is sick", 500);
            lib.addResponse(game, "Continue", 600, "done");

		}
	}
})(window.questions, window.questionLib);
