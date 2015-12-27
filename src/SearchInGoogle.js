(function () {
	'use strict';

	var SearchInGoogle = (function () {

		/**
		 * constructor 
		 */
		function SearchInGoogle() {
			var c = this;
			c.init();
		}// constructor
		
		/**
		 * init data and listeners
		 */
		SearchInGoogle.prototype.init = function () {
			var c = this,
				_$button = $('#btnSearch');

			if (typeof _$button !== 'undefined' && _$button !== null) {
				_$button.click(function (event) {
					event.preventDefault();
					event.stopPropagation();
					var q = $('#searchQuery').val();
					c.doSearch(q);
				});//click
			}//if
		};//init
		
		/**
		 * perform search by google
		 */
		SearchInGoogle.prototype.doSearch = function (q) {
			var c = this;
			//console.log(c);
			console.log(q);
			$.ajax({
				method: 'GET',
				url: 'http://localhost:3030/api/users?q=&m=-1&p=-1'
			}).fail(function (jqXHR, textStatus ) {
				//console.log(jqXHR);
				//console.log(textStatus);
			}).done(function (html) {
				console.log(html);
			});
		};

		return SearchInGoogle;
	})(); // SearchInGoogle
	
	new SearchInGoogle();

}).call(this);