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
    uid : '',
    url: function() {
    	console.log("URL", "https://scrum-tools.firebaseio.com/users/" + this.uid + "/stories/");
    	return "https://scrum-tools.firebaseio.com/users/" + this.uid + "/stories/";
    },
    initialize: function(options){      
    	this.uid = options.uid;
    },
    parse: function(res) {
    	console.log("response", res);
    }

  }); 
  return StoryCollection;
});
