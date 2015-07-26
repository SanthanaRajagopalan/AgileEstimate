define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'text!templates/home/homeTemplate.html',
  'models/story/StoryModel',
  'collections/stories/StoriesCollection',
  'firebase',
  'backbonefire'
], function($, _, Backbone, HomeView, homeTemplate, StoryModel, StoriesCollection, Firebase){

  var HomeView = Backbone.View.extend({
    el: $("#content"),
    fireRef : new Firebase("https://scrum-tools.firebaseio.com/"),
	events: {
		"click nav li": "navControl",
		"click button.save-game": "saveGame"
			
	},
	initialize: function(options) {
		this.model = options.model;
	},
    render: function(){
	    console.log("render..", this.model);
	    if (this.model.toJSON) {
	    	this.model = this.model.toJSON();
	    }
	    homeTemplate = _.template(homeTemplate);
	    this.$el.html(homeTemplate(this.model));

    },
    
    saveGame: function() {
    	var self = this;
		this.fireRef.onAuth(function(authData) {
			console.log(authData, self.fireRef);
			/*self.fireRef.child(selffireRef.getAuth().uid).child('stories').push({
				
			});*/
			var storyCollection = new StoriesCollection({uid: self.fireRef.getAuth().uid});
			var storyModel = new StoryModel({
				sprintName: $('input[name="sprint-name"]').val(),
				storyName:   $('input[name="story-name"]').val(),
				description: $('input[name="story-desc"]').val(),
				id: storyCollection.length + 1
			});
			
			storyCollection.add( storyModel);
			
		});
    },
	/**
	 * control navigation
	 */
    navControl: function(event) {
    	var target = $(event.target);
		if(target.parent().is("li")){
			target.parent().siblings().removeClass("active");
			target.parent().addClass("active");
		}
	}
  });

  return HomeView;
  
});
