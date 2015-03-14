define([
	'jquery',
	'backbone',
	'underscore',
	'scripts/script_getTime',
	'views/photos_all_info_view',
	'routers/router'], function($, Backbone, _, getTime, photos_all_info_view, router ){
	
		var Photo = Backbone.Model.extend({
			
			load_save_marker: function (id) {
				
				this.url = 'https://api.instagram.com/v1/media/'+id+'/?client_id=dd584e861f854dd2ae3636de72535e76';

				this.fetch({
					dataType: 'jsonp',
					type: 'GET',
					context: this,
					remove: false
				})
				.done(function(data){
					
					console.log(this);

					if (this.get('id')) {
						var view = new photos_all_info_view({model: this});
                		view.showPage2(id);
					} else {
						alert('Ви намагаєтесь перейти за не вірною адресою! Вас буде перенаправлено на головну сторінку!');
						document.location.href = 'http://instagram.com/';			}
      			});
			},

  			parse: function (response) {
  				if (response.data) {
  					response = response.data;
  					response.created_time = getTime(response.created_time);
  				};

  				return response;
  			}

		});

	return Photo;

});