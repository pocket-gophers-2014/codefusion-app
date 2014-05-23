define("appkit/router", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

    Router.map(function() {
      this.route('component-test');
      this.route('helper-test');
      // this.resource('posts', function() {
      //   this.route('new');
      // });
    });

    __exports__["default"] = Router;
  });