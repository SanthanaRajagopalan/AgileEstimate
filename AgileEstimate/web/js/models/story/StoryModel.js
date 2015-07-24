define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var StoryModel = Backbone.Model.extend({

  		defaults : {
  		 sprintName: "",
  		 point: "",
  		 storyName: "",
  		 description:"",
  		 participants: "",
  		 id:''
  		 
  		}
    });

  	return StoryModel;

});
