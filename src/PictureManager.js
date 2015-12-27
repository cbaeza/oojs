(function () {

	var PictureManager = (function () {

		function PictureManager() {
			var c = this;
			c.init();
		}//constructor	
		
		PictureManager.prototype.init = function () {
			//console.log('init PictureManager');
			var c = this;
			$.ajax({
				method: 'GET',
				url: 'http://0.0.0.0:8080/docs/books.json'
			}).fail(function (jqXHR, textStatus) {
				console.log(jqXHR);
				console.log(textStatus);
			}).done(function (data) {
				c.showData(data);
			});

		}// init
		
		PictureManager.prototype.showData = function (data) {
			var c = this;
			//console.log(data);
			data.forEach(function (entry) {
				//console.log(entry);
				$('#list').append(c.createEntryForView(entry));
			});
		} // show data 
		
		PictureManager.prototype.createEntryForView = function (entry) {
			var _book = document.createElement('li');
			var _d = document.createElement('div');
			_book.appendChild(_d);
			//_book.className = 'thumbnail';
			for (var p in entry) {
				if (p === 'image') {
					//console.log('image' + entry[p]);
					var _i = document.createElement('img');
					_i.className = 'thumb';
					_i.width = 100;
					_i.src = entry[p];
					_d.appendChild(_i);
				} else {
					var _p = document.createElement('p');
					_p.innerHTML = p + ': ' + entry[p];
					_d.appendChild(_p);
				}
			}//for
			console.log(_book);
			return _book;
		};

		return PictureManager;
	})(); // PictureManager
	
	new PictureManager();

}).call(this);