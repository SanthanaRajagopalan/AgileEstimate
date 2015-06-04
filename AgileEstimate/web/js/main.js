/**
 * Require config file.
 */
require.config({
  paths: {
    jquery: 'lib/jquery/dist/jquery.min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone',
    text: 'lib/text/text',
    templates: '../templates'
    }

});

require(['app',], function(App){
  App.initialize();
});