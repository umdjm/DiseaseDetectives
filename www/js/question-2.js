window.questions = {} || window.questions;

(function(ns) {
	ns['2'] = {
		preload: function() {
		},

		create: function() {
			var game = this.game;

			game.stage.backgroundColor='#ffffff';

			var text = game.add.text(180, 20, 'This is question 2');
			text.anchor.setTo(0.5, 0.5);
		}
	}
})(window.questions);
