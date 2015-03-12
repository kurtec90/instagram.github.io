define([
	'jquery', 
	'backbone',
	'underscore',
	'text!templates/photo_template.html'], function($, Backbone, _, photo_template ){

		var PhotoView = Backbone.View.extend({
			className: "results-item",
			template: _.template( photo_template ),

			render: function() {
				this.$el.html(this.template(this.model.toJSON()));
				return this;
		  	}
		});

	return PhotoView;
});