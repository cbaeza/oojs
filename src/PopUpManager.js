(function () {
	'use strict';

	var PopUpManager = (function () {

		var options;
		/**
		 * A simple constructor
		 * @constructor
		 */
		function PopUpManager(options) {
			var c = this;
			c.options = options;
			//console.log("constructor!");
			console.log(c.options);
			c.init();
		}// constructor

		/**
		 * init some things
		 */
		PopUpManager.prototype.init = function () {
			//console.log("init");
			var c = this,
				$button = $('#myButton');

			console.log($button.text());
			if (typeof $button !== 'undefined' && $button !== null) {
				console.log('set click event');
				$button.click(function (event) {
					event.preventDefault();
					event.stopPropagation();
					$('.modal-body').empty();
					$('.modal-body').append('<p>' + $(this).attr('data-button-click') + JSON.stringify(c.options) + '</p>');
					$('#myModal').modal('show');
				});//click
			}//if
		};// init

		return PopUpManager;

	})();// PopUpManager

	var options = { someOption: 'some data to read' };
	new PopUpManager(options);
}).call(this);

