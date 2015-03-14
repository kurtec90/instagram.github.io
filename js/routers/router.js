define([
    'jquery', 
    'backbone',
    'underscore',
    'collections/photo_collection',
    'models/photo',
    'views/photos_view',
    'views/photos_all_info_view',
    'scripts/script_checkLoadMore'], function($, Backbone, _, photo_collection, photo, photos_view, photos_all_info_view, checkLoadMore ){


        var Routers = Backbone.Router.extend({
	
	       routes: {
		      '' : 'homeRout',
		      'photos' : 'showResult',
		      'photos/:id' : 'photoRout',
              '*other' : 'default'
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

                if (photo_collection.length == 0) {
                    
                    var model = new photo;
                    model.load_save_marker(id);

                } else {
                    var model = photo_collection.get(id);
                    var view = new photos_all_info_view({model: model});
                    view.showPage2(id);
                };             
            },

            default: function(other) {
                alert('Ви намагаєтесь перейти за не вірною адресою! Вас буде перенаправлено на головну сторінку!');
                this.homeRout();
            }

        });

        var router = new Routers();
        Backbone.history.start();

    return router;
});