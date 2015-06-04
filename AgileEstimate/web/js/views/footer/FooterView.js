define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#footer"),

    render: function(){
		console.log("FOOTER...")
    	this.$el.html(footerTemplate);    	
    }	

  });

  return FooterView;
  
});
