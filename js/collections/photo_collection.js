define([ 
	'jquery', 
	'backbone',
	'underscore',
	'models/photo',
	'scripts/script_getTime',
	'scripts/script_checkLoadMore'], function($, Backbone, _, photo, getTime, checkLoadMore) {

		var PhotoCollection = Backbone.Collection.extend({
	
			model: photo,

			client_id: 'dd584e861f854dd2ae3636de72535e76',
			api_host_part_1: 'https://api.instagram.com/v1/tags/',
			api_host_part_2: '/media/recent/?client_id=',

			finalSearch: function (tag) {
						
				this.reset();

				this.url = this.getURL(tag);

				this.fetch({
					dataType: 'jsonp',
					type: 'GET',
					context: this
				})
				.done(function(data){
					this.next_url = data.pagination.next_url;
					checkLoadMore(this.next_url);
					
					console.log(photo_collection);

					if (this.length == 0) {
						alert('По Вашому запиту фото відсутні');
					};
      			});
			},

			load_more: function () {

				this.url = this.next_url;

				this.fetch({
					dataType: 'jsonp',
					type: 'GET',
					context: this,
					remove: false
				})
				.done(function(data){
					this.next_url = data.pagination.next_url;
					console.log(photo_collection);
      			});
			},

			parse: function (response) {
    	
    			var new_data = response.data;

    			_.each(new_data, function (model) {
    				model.created_time = getTime(model.created_time);
    			});

    			return new_data;
  			},

			getURL: function (tag) {
				return this.api_host_part_1+tag+this.api_host_part_2+this.client_id;
			}
	
		});

		var photo_collection = new PhotoCollection();

	return photo_collection;
});