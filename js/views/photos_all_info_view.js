define([
	'jquery', 
	'backbone',
	'underscore',
	'scripts/script_newHeight',
	'text!templates/photo_inf_template.html'], function($, Backbone, _, newHeight, photo_inf_template){

		var PhotoAllInfoView = Backbone.View.extend({
				
			el: '#content_one_photo',
			template: _.template( photo_inf_template ),

			render: function() {
				this.$el.html(this.template(this.model.toJSON()));
				newHeight(this.$el);
				return this;
		  	}
		});

	return PhotoAllInfoView;
});