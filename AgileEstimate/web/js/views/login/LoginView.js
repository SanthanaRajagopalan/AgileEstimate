define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'text!templates/login/loginTemplate.html'
], function($, _, Backbone, HomeView, loginTemplate){

  var LoginView = Backbone.View.extend({
    el: $("#content"),
	
	events: {
		"click .sign-in": "signIn"
	},
  
    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(loginTemplate);

    },
	
	signIn: function() {
		console.log("SIgn IN");
		data = $("#content form").serialize()
		console.log("DATA", data);
		$.ajax({
            url:"/login",
			type: "POST",
			data: data,
            success:function(result){
               var homeView = new HomeView();
               homeView.render();
            }
        });
	}
  });

  return LoginView;
  
});
