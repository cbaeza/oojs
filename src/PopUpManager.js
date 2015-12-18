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
			var c = this,
				$button = $('#myButton');

			console.log($button.text());
			if( $button !== undefined){
				//console.log('set click event');
				$button.click(function(event){
						event.preventDefault();
						event.stopPropagation();
						console.log('button click');
						alert($button.attr('data-button-click'));
					}//handler for click event
				);//click
			}//if
		};// init

		return PopUpManager;

	})();// PopUpManager

	new PopUpManager();
});

