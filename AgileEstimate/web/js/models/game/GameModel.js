define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var GameModel = Backbone.Model.extend({

  		defaults : {
          query : "unknown"
  		},  

      	initialize: function( options ) {
  			this.query = options.query; 
  		},

		url : function() {
	        return '' + this.query;
	    },
	    parse : function(res) { 
	        return res.data;
	    }

    });

  	return GameModel;

});
