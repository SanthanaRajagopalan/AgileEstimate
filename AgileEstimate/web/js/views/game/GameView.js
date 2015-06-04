define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, HomeView, homeTemplate){

  var GameView = Backbone.View.extend({
    el: $("#content"),
	
	events: {
		"click nav li": "navControl"
	},
  
    render: function(){
      this.$el.html(homeTemplate);

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

  return GameView;
  
});
