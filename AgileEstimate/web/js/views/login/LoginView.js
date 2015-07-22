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
    fireRef : new Firebase("https://glowing-inferno-9580.firebaseio.com/"),	
	events: {
		"click .sign-in": "signIn",
		"click .signup-btn-google": "googleSignIn"
	},
  
    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(loginTemplate);
    },
    googleSignIn: function() {
    	this.fireRef.authWithOAuthPopup("google", function(error, authData) {
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
    	
    },
	signIn: function() {
		data = $("#content form").serialize()
		this.fireRef.createUser({
		  email: $("#email").val(),
		  password: $("#passwd").val()
		}, function(error, userData) {
		  if (error) {
		    switch (error.code) {
		      case "EMAIL_TAKEN":
		        console.log("The new user account cannot be created because the email is already in use.");
		        break;
		      case "INVALID_EMAIL":
		        console.log("The specified email is not a valid email.");
		        break;
		      default:
		        console.log("Error creating user:", error);
		    }
		  } else {
			  
		  }
		});
	}
  });

  return LoginView;
  
});
