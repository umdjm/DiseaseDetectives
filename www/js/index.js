function onDeviceReady() {

	var game = new Phaser.Game(360, 640, Phaser.AUTO, 'game-container');

	_.each(window.questions, function(state, key) {
		game.state.add(key, state);
	})
	game.state.start('1');

	document.addEventListener('pause', onPause, false);
	document.addEventListener('resume', onResume, false);

	function onPause() {
		game.paused = true;
	}

	function onResume() {
		game.paused = false;
	}
}

document.addEventListener('deviceready', onDeviceReady, false);
