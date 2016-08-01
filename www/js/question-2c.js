window.questions = window.questions || {};

(function(ns, lib) {
	ns['2c'] = {

		preload: function() {
            lib.loadMultiRepsonseIcons(this.game);
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "Did any of the following happen today?", 80);
			lib.addMultiResponse(game, "I was too sick to go to school", 200);
			lib.addMultiResponse(game, "I had to go see the doctor", 300);
            lib.addResponse(game, "Continue", 400, "done");

		}
	}
})(window.questions, window.questionLib);
