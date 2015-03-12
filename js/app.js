
requirejs.config({

    baseUrl: "js/",

    paths: {
        jquery: 'lib/jquery',
        backbone: 'lib/backbone',
        underscore: 'lib/underscore',
        storage: 'lib/backbone.localStorage',
        text: 'lib/require/text'
    },

    shim: {
        
        'underscore': {
            exports: '_'
        },		
        
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
   		
        'storage': {
            deps: ['jquery', 'backbone', 'underscore']
        }
    }

});


require(["jquery", "views/app"], function ($, AppView) {
    
    $(document).ready(function() {
		new AppView();
    });
    
});	
