define([
  'jquery',
  'underscore',
  'views/home/HomeView',
  'text!templates/login/loginTemplate.html',
  'backbone',
  'collections/user/UserCollection',
  'models/user/UserModel',
  'firebase',
  'backbonefire'
], function($, _, HomeView, loginTemplate, Backbone, UserCollection, UserModel, Firebase){

  var LoginView = Backbone.View.extend({
    el: $("#content"),
    fireRef : new Firebase("https://scrum-tools.firebaseio.com/"),
    initialize: function() {
    	this.collection = new UserCollection();
    	console.log(this.collection);
    	

    },
	events: {
		"click .sign-in": "signUp",
		"click .signup-btn-google": "googleSignIn"
	},
  
    render: function() {
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(loginTemplate);
    },
    googleSignIn: function() {
    	var userCollection = this.collection;
    	console.log("ref.getAuth()", this.fireRef.getAuth());
    	this.fireRef.authWithOAuthPopup("google", function(error, authData) {
 			  if (error) {
 			    console.log("Login Failed!", error);
 			  } else {
 			   console.log("Authenticated successfully with payload:", authData);
 			   var userModel = new UserModel({id: authData.uid, 
 	 				   firstName: authData.google.cachedUserProfile.given_name, 
 	 				   lastName: authData.google.cachedUserProfile.family_name, 
 	 				   provider: authData.provider, 
 	 				   photo: authData.profileImageURL,
 	 				   token: authData.token,
 	 				   accessToken: authData.google.accessToken}); 
 			   userCollection.create(userModel, function(){
 				   console.log("HI....complete");
 			   });
 			   	  
 			   new HomeView({model:userModel}).render();
 			  }
 			});
    	
    },
    signUp: function() {
		data = $("#content form").serialize();
		var userCollection = this.collection;
		console.log("ref.getAuth()", this.fireRef.getAuth());
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
			  console.log(userData.uid);
			  var userModel = new UserModel({email: $("#email").val(), id: userData.uid, firstName: $("#first-name").val(), lastName: $("#last-name").val()});
			  userCollection.create(userModel);
			  new HomeView({model: userModel}).render();
		  }
		})
	}
  });

  return LoginView;
  
});
