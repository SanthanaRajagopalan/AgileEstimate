define([
  'jquery',
  'underscore',
  'backbone',
  'models/user/UserModel',
  'firebase',
  'backbonefire'
], function($, _, Backbone, GameModel, Firebase, Backfire){
  var GamesCollection = Backbone.Collection.extend({
    model: UserModel,
    
    initialize: function(){

      

    }

  });
 
  return GamesCollection;
});
