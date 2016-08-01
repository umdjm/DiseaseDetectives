window.questions = window.questions || {};

(function(ns, lib) {
	ns['2b'] = {

		preload: function() {
		},

		create: function() {
			var game = this.game;
			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "Which buttons show how you feel?", 80);
			lib.addResponse(game, "Cough", 200, "2c");
			lib.addResponse(game, "Sore Throat", 300, "2c");
			lib.addResponse(game, "Headache", 400, "2c");
			lib.addResponse(game, "Chills", 500, "2c");
			lib.addResponse(game, "Fever", 600, "2c");
			lib.addResponse(game, "Stuffy Nose", 700, "2c");
			lib.addResponse(game, "Body Aches", 800, "2c");
			lib.addResponse(game, "I was too sick to go to school", 900, "2c");
			lib.addResponse(game, "I had to go see the doctor", 1000, "2c");

		}
	}
})(window.questions, window.questionLib);
