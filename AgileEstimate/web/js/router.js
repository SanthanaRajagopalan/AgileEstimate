/**
 * Handle all the routes
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/login/LoginView',
  'views/home/HomeView',
  'views/footer/FooterView',
  'firebase',
  'backbonefire'  
], function($, _, Backbone, LoginView, HomeView, FooterView, Firebase) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction',
      // Dynamic routes
      ":route/:action": "dynamicRoute"

    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter,
    fireRef = new Firebase("https://glowing-inferno-9580.firebaseio.com/");
    app_router.on('route:defaultAction', function (actions) {
       // We have no matching route, lets display the home page 
    	if (fireRef.getAuth()) {
			fireRef.child('poker').child('users').child(fireRef.getAuth().uid).once('value', function(snap){
				console.log('messages', snap.val());
	    		var homeView = new HomeView({model:snap.val()});
	    		homeView.render();
			});
		}else {
			  var loginView = new LoginView();
		      loginView.render();
		}
      
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
