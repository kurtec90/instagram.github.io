define([
	'jquery', 
	'backbone',
	'underscore',
	'storage',
	'models/comment'], function($, Backbone, _, storage, comment){

		var CommentsCollection = Backbone.Collection.extend({

			model: comment,
			localStorage: new Backbone.LocalStorage('all_comments'),

			initialize: function() {
      			this.fetch();
    		},

		});

		var comments_collection = new CommentsCollection();

	return comments_collection;
});