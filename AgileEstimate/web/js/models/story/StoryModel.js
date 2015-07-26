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
  		 id: "",
  		 createdDate: new Date().toString()  		 
  		},
  		idAttribute: "id"
    });

  	return StoryModel;

});
