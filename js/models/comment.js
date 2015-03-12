define([
	'backbone',
	'underscore'], function(Backbone, _ ){

		var Comment = Backbone.Model.extend({
		
			defaults: {
				comments: "[]"
			},

			addComment: function(comment) {
		
				var comments = JSON.parse(this.get('comments'));
				comments.push(comment);
				this.set('comments', JSON.stringify(comments));
			}
		});

	return Comment;
});
