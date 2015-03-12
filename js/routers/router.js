define([
    'jquery', 
    'backbone',
    'underscore',
    'collections/photo_collection',
    'views/photos_view',
    'views/photos_all_info_view',
    'collections/comments_collection',
    'views/comments_view',
    'scripts/script_scrollToButtom',
    'scripts/script_checkLoadMore'], function($, Backbone, _, photo_collection, photos_view, photos_all_info_view, comments_collection, CommentsView, scrolling, checkLoadMore ){


        var Routers = Backbone.Router.extend({
	
	       routes: {
		      '' : 'homeRout',
		      'photos' : 'showResult',
		      'photos/:id' : 'photoRout'
	       },

	       homeRout: function() {
                this.navigate("#photos");        
                photo_collection.reset();

                $("#wrapper_container").show();
                $("#load_more").hide();
                $("#content_one_photo").hide();
            },

            showResult: function () {
            	$("#wrapper_container").show();
                $("#content_one_photo").hide();
            	
                checkLoadMore(photo_collection.next_url);
            },

            photoRout: function(id) {
            	$("#wrapper_container").hide();
            	$("#content_one_photo").show();

                var model = photo_collection.get(id);
                var view = new photos_all_info_view({model: model});
            	view.render();

                var comments = comments_collection.get(id) || comments_collection.add({'id': id}),
                    commentsView = new CommentsView({
                        model: comments, 
                        el: view.$('.all_comments') 
                    });
                commentsView.template = _.template($('#all_comments-template').html());
                commentsView.render();
                
                scrolling();
            }

        });

        var router = new Routers();
        Backbone.history.start();

    return router;
});