define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, HomeView, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#content"),
	
	events: {
		"click nav li": "navControl",
		"click button.save-game": "saveGame"
			
	},
  
    render: function(){
      this.$el.html(homeTemplate);

    },
    
    saveGame: function() {
		$.ajax({
            url:"/save",
			type: "POST",
			data: data,
            success:function(result){
              console.log("saved")
            }
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
