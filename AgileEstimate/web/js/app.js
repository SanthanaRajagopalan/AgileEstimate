/**
 * Application entry
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'firebase',
  'backbonefire'
], function($, _, Backbone, Router, Firebase, Backbonefire){
  var initialize = function(){
	Router.initialize();
  }

  return {
    initialize: initialize
  };
});