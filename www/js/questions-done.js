window.questions = window.questions || {};

(function(ns, lib) {
	ns['done'] = {

		preload: function() {
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "Thank you for completing the survey", 80);

		}
	}
})(window.questions, window.questionLib);
