define("appkit/initializers/inject-store-into-component", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = {
      name: "injectStoreIntoComponent",
      after: "store",

      initialize: function(container, application) {
        container.typeInjection('component', 'store', 'store:main');
      }
    };
  });