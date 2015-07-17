define([
  'jquery',
  'underscore',
  'views/home/HomeView',
  'text!templates/login/loginTemplate.html',
  'backbone',
  'firebase',
  'backbonefire'
], function($, _, HomeView, loginTemplate, Backbone, Firebase){

  var LoginView = Backbone.View.extend({
    el: $("#content"),
	
	events: {
		"click .sign-in": "signIn"
	},
  
    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(loginTemplate);

    },
	
	signIn: function() {
		console.log("SIgn IN");
		data = $("#content form").serialize()
		console.log("DATA", data);
		var ref = new Firebase("https://glowing-inferno-9580.firebaseio.com/");
		ref.authWithOAuthPopup("google", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			    //auth data snapshot
			   /*
			    * 
			    * authData.auth.provider
			    * authData.auth.uid
			    * authData.expires
			    * authData.google {}
			    * authData.google.accessToken
			    * authData.google.cachedUserProfile {}
				*	family_name: "Yagami"
				*	gender: "male"
				*	given_name: "Light"
				*	id: "118254511999189029260"
				*	link: "https://plus.google.com/118254511999189029260"
				*	locale: "en"
				*	name: "Light Yagami"
				*	picture: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
				* authData.google.displayName: "Light Yagami"	
				* *.id
				* *.profileImageURL
				* authData.provider
				* *.token
			    * 
			    */ 
			   
			  }
			});

	/*	ref.authWithOAuthRedirect("google", function(error) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    // We'll never get here, as the page will redirect on success.
		  }
		});*/
		/*$.ajax({
            url:"/login",
			type: "POST",
			data: data,
            success:function(result){
               var homeView = new HomeView();
               homeView.render();
            }
        });*/
	}
  });

  return LoginView;
  
});
