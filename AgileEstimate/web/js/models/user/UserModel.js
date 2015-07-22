define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var UserModel = Backbone.Model.extend({

  		defaults : {
  		  firstName: '',
  		  lastName: '',
  		  email: '',
  		  password:'',
  		  provider: 'simplelogin',
  		  photo: ''
  		}
    });

  	return UserModel;

});
