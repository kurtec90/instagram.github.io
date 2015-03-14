define([
	'jquery', 
	'backbone',
	'underscore',
	'storage',
	'collections/comments_collection',
    'scripts/script_scrollToButtom',
    'text!templates/part_comments_template.html'], function($, Backbone, _, storage, comments_collection, scrolling, part_comments_template ){

		var CommentsView = Backbone.View.extend({

			template: _.template( part_comments_template ),

			events: {
				'keypress .textarea_comment': 'ctrlEnter',
				'click .text_more_comments': 'openMoreComments'
			},

			initialize: function() {
		      	this.listenTo(this.model, "change", this.addComment);
			},
			
			render: function() {
				var comments_array = JSON.parse(this.model.get("comments"));

				this.$el.html(this.template({"comments": comments_array}));
				return this;
		  	},

			ctrlEnter: function (event) {	
				if((event.ctrlKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD))) {
					this.saveComment();
		        };
			},

			saveComment: function () {
				var comment = this.$(".textarea_comment").val().trim();
				
				if (!comment) {
					return;
				};

				this.model.addComment(comment);
				comments_collection.create(this.model);
			},

			addComment: function (argument) {
				this.render();
				scrolling();
			},

			openMoreComments: function () {	
				this.$el.find('.one_comment_block').css('display', 'block');
				this.$el.find('.more_comments').css('display', 'none');
			}

		});

	return CommentsView;
});