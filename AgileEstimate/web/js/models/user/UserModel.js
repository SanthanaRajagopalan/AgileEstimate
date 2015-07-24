define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var UserModel = Backbone.Model.extend({

  		defaults : {
  			id: '',
  		  firstName: '',
  		  lastName: '',
  		  email: '',
   		  provider: 'simplelogin',
  		  photo: 'https://lh3.googleusercontent.com/-xGCviJJGRes/AAAAAAAAAAI/AAAAAAAAAAA/SFe3RY7PBVA/s120-c/photo.jpg',
  		  token: '',
  		  accessToken: '',
  		  stories: ''
  		},
  		getData: function() {
  			
  		}
    });

  	return UserModel;

});
