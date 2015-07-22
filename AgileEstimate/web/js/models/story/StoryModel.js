define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var UserModel = Backbone.Model.extend({

  		defaults : {
  		 sprintName: "",
  		 point: "",
  		 storyName: "",
  		 description:"",
  		 participants: ""
  		 
  		}
    });

  	return UserModel;

});
