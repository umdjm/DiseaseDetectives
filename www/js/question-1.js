window.questions = {} || window.questions;

(function(ns) {
	ns['1'] = {
		preload: function() {
			var load = this.game.load;

			['feeling-1', 'feeling-2', 'feeling-3', 'feeling-4', 'feeling-5']
				.forEach( img => load.image(img, `img/${img}.png`) )
		},

		create: function() {
			var game = this.game;

			game.stage.backgroundColor='#fffff0';

			var text = game.add.text(180, 20, 'How are you feeling today?')
			text.anchor.setTo(0.5, 0.5)

			this.icons = [1,2,3,4,5].map( function(feeling, idx) { 
				var icon = game.add.sprite(180, 40 + 90 * idx, 'feeling-' + feeling)
				icon.anchor.setTo(0.5, 0,5)
				icon.scale.setTo(0.2, 0.2)
			})
		}
	}
})(window.questions);
