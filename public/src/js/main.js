require([
  'jquery',
  'lodash'
], function ($, _) {

  var app = {

    initialize: function initialize() {
    
      console.log('Hello world!');
    
      return this;
    
    }

  };

  $(document).ready(_.bind(app.initialize, app));

});