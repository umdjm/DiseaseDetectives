window.questions = window.questions || {};

(function(ns, lib) {
	ns['2b'] = {

		preload: function() {
            lib.loadMultiRepsonseIcons(this.game);
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "Which buttons show how you feel?", 80);
			lib.addMultiResponse(game, "Cough", 200);
			lib.addMultiResponse(game, "Sore Throat", 300);
			lib.addMultiResponse(game, "Headache", 400);
			lib.addMultiResponse(game, "Fever", 500);
            lib.addResponse(game, "Continue", 600, "2c");

		}
	}
})(window.questions, window.questionLib);
