define([
	'jquery', 
	'backbone',
	'underscore',
	'routers/router',
	'collections/photo_collection',
	'views/photos_view',
	'collections/comments_collection',
	'views/comments_view'], function($, Backbone, _, router, photo_collection, photos_view, comments_collection, CommentsView){

		var AppView = Backbone.View.extend({

			el: '#wrapper_container',

			events: {
				'click #btn_search': 'search',
				'keypress #search_input': 'searchEnter',
				'click #btn_load_more': 'moreSearch',
			},

			initialize: function() {
		    	this.listenTo(photo_collection, 'reset', this.addAll);
		    	this.listenTo(photo_collection, 'add', this.addOne);
			},

			search: function () {
				var tag = $("#search_input").val().trim();
				
				if (!tag) {
					return
				};
				
				photo_collection.finalSearch(tag);
			},

			searchEnter: function (event) {
				var ENTER_KEY = 13;
				if (event.which == ENTER_KEY) {this.search()} else return;
			},

			addAll: function() {
		    	this.$('#content').html('');
		    	photo_collection.each(this.addOne, this);
		  	},

		  	addOne: function(photo_model) {
		    	var view = new photos_view({model: photo_model});
		    	this.$('#content').append(view.render().el);
		    	
		    	var id = photo_model.get('id'),
		    	    comments = comments_collection.get(id) || comments_collection.add({'id': id}),
		    	    commentsView = new CommentsView({
		    	    	model: comments, 
		    	    	el: view.$('.comments')
		    	    });

		    	commentsView.render();

		  	},

			moreSearch: function () {
				photo_collection.load_more();
			}

		});

	return AppView;

});
