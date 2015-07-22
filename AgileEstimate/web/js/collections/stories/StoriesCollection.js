define([
  'jquery',
  'underscore',
  'backbone',
  'models/story/StoryModel',
  'firebase',
  'backbonefire'
], function($, _, Backbone, StoryModel, Firebase, Backfire){
  var StoryCollection = Backbone.Firebase.Collection.extend({
    model: StoryModel,
    url: "https://glowing-inferno-9580.firebaseio.com/poker/users",
    initialize: function(){      

    }

  });
 
  return StoryCollection;
});
