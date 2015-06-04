/**
 * Saved games collection
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/game/GameModel'
], function($, _, Backbone, GameModel){
  var GamesCollection = Backbone.Collection.extend({
    model: GameModel,
    
    initialize: function(){

      

    }

  });
 
  return GamesCollection;
});
