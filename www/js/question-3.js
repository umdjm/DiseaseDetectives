window.questions = window.questions || {};

(function(ns, lib) {
	ns['3'] = {

		preload: function() {
            lib.loadMultiRepsonseIcons(this.game);
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "Did any of these other things happen today?", 80);
			lib.addMultiResponse(game, "I went to the doctor", 200);
			lib.addMultiResponse(game, "Someone in my family has a cold, but I feel fine", 300);
			lib.addMultiResponse(game, "I have a friend who has a cold, but I feel fine", 400);
			lib.addMultiResponse(game, "I got a flu vaccine (also called a flu shot!)", 500);
            lib.addMultiResponse(game, "Continue", 600, 'done');
		}
	}
})(window.questions, window.questionLib);
