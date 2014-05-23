define("appkit/app", 
  ["ember/resolver","ember/load-initializers","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var loadInitializers = __dependency2__["default"];

    var App = Ember.Application.extend({
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver
    });

    loadInitializers(App, 'appkit');

    __exports__["default"] = App;
  });