/**
 * Require config file.
 */
require.config({
  paths: {
    jquery: 'lib/jquery/dist/jquery.min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone',
    firebase: 'lib/firebase/firebase',
    backbonefire: 'lib/backbonefire/backbonefire',
    text: 'lib/text/text',
    templates: '../templates'
    }

});

require(['app',], function(App){
  App.initialize();
});