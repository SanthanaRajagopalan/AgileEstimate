define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var SessionModel = Backbone.Model.extend({

  		defaults : {
  			sessionId: '',
  			userName: '',
  			password: '',
  			userId: ''
  		},
  	   isAuthorized: function(){
  	       return Boolean(this.get("sessionId"));
  	    }
    });

  	return SessionModel;

});
