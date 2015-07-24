define([
  'jquery',
  'underscore',
  'backbone',
  'models/user/UserModel',
  'firebase',
  'backbonefire'
], function($, _, Backbone, UserModel, Firebase, Backfire){
  var UserCollection = Backbone.Firebase.Collection.extend({
    model: UserModel,
    url: "https://scrum-tools.firebaseio.com/users",
    initialize: function(){      
    	
    }

  });
 
  return UserCollection;
});
