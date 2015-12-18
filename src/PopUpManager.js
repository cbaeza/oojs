$(function () {
	var PopUpManager = (function () {

		/**
		 * A simple constructor
		 * @constructor
		 */
		function PopUpManager() {
			var c = this;
			console.log("constructor!");
			c.init();
		}// constructor

		/**
		 * init some things
		 */
		PopUpManager.prototype.init = function () {
			console.log("init PopUpManager!");
		};// init

		return PopUpManager;

	})();// PopUpManager

	new PopUpManager();
});

