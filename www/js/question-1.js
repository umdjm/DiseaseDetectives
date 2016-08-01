window.questions = window.questions || {};

(function(ns, lib) {
	ns['1'] = {
		preload: function() {
			var load = this.game.load;

			['feeling-1', 'feeling-2', 'feeling-3', 'feeling-4', 'feeling-5']
				.forEach( function(img) {
					load.image(img, 'img/' + img + '.png');
				});
		},

		create: function() {
			var game = this.game;

			game.stage.backgroundColor='#ffffff';
			lib.addText(game, "How are you feeling today?", 80);
			lib.addIconResponse(game, 'feeling-1', 200, '2');
			lib.addIconResponse(game, 'feeling-2', 300, '2');
			lib.addIconResponse(game, 'feeling-3', 400, '2');
			lib.addIconResponse(game, 'feeling-4', 500, '2');
			lib.addIconResponse(game, 'feeling-5', 600, '2');
		}
	}
})(window.questions, window.questionLib);
