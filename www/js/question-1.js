window.questions = window.questions || {};

(function(ns) {
	ns['1'] = {
		preload: function() {
			var load = this.game.load;

			['feeling-1', 'feeling-2', 'feeling-3', 'feeling-4', 'feeling-5']
				.forEach( function(img) {
					load.image(img, `img/${img}.png`);
				});
		},

		create: function() {
			var game = this.game;

			game.stage.backgroundColor='#ffffff';

            var style = { align: "center" };
			var text = game.add.text(game.world.centerX, 80, 'How are you feeling today?', style);
			text.anchor.setTo(0.5, 0.5)

			this.icons = [1,2,3,4,5].map( function(feeling, idx) { 
				var icon = game.add.sprite(game.world.centerX, 100 + 100 * idx, 'feeling-' + feeling);
				icon.anchor.setTo(0.5, 0,5)
				icon.scale.setTo(0.2, 0.2)

				icon.inputEnabled = true;
				icon.events.onInputDown.add(function(sprite, pointer) {
					game.state.start('2');
				});
			})
		}
	}
})(window.questions);
