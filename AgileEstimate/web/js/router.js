/**
 * Handle all the routes
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/login/LoginView',
  'views/game/GameView',
  'views/footer/FooterView'
], function($, _, Backbone, LoginView, GameView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction',
      // Dynamic routes
      ":route/:action": "dynamicRoute"

    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:defaultAction', function (actions) {
       // We have no matching route, lets display the home page 
        var loginView = new LoginView();
        loginView.render();
    });

    // Dynamic routes
    app_router.on('route:dynamicRoute', function( route, action ){ 
        alert(route + "_" + action); // Todo: game view dynamic url 
    });
    
   
    var footerView = new FooterView();
	footerView.render();
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
