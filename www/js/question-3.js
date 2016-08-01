window.questions = window.questions || {};

(function(ns, lib) {
	ns['3'] = {

		preload: function() {
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "Did any of these other things happen today?", 80);
			lib.addResponse(game, "I went to the doctor", 200, "done");
			lib.addResponse(game, "Someone in my family has a cold, but I feel fine", 300, "done");
			lib.addResponse(game, "I have a friend who has a cold, but I feel fine", 400, "done");
			lib.addResponse(game, "I got a flu vaccine (also called a flu shot!)", 500, "done");

		}
	}
})(window.questions, window.questionLib);
