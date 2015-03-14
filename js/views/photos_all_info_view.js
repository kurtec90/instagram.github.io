define([
	'jquery', 
	'backbone',
	'underscore',
	'scripts/script_newHeight',
	'text!templates/photo_inf_template.html',
	'text!templates/all_comments_template.html',
	'collections/comments_collection',
	'views/comments_view',
	'scripts/script_scrollToButtom'], function($, Backbone, _, newHeight, photo_inf_template, all_comments_template, comments_collection, CommentsView, scrolling){

		var PhotoAllInfoView = Backbone.View.extend({
				
			el: '#content_one_photo',
			template: _.template( photo_inf_template ),

			render: function() {
				this.$el.html(this.template(this.model.toJSON()));
				newHeight(this.$el);
				return this;
		  	},

		  	showPage2: function (id) {

            	this.render();

                var comments = comments_collection.get(id) || comments_collection.add({'id': id}),
                    commentsView = new CommentsView({
                        model: comments, 
                        el: this.$('.all_comments') 
                    });
                commentsView.template = _.template( all_comments_template );
                commentsView.render();
                
                scrolling();
			}
		});

	return PhotoAllInfoView;
});