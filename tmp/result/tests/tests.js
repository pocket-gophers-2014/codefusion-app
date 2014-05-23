define("appkit/tests/acceptance/component-test", 
  [],
  function() {
    "use strict";
    var App;

    module('Acceptances - Component', {
      setup: function(){
        App = startApp();
      },
      teardown: function() {
        Ember.run(App, 'destroy');
      }
    });

    test('component output is rendered', function(){
      expect(2);

      visit('/component-test').then(function(){
        var list = find('.pretty-color');
        equal(list.length, 3);
        equal(list.first().text(), 'Pretty Color: purple\n');
      });
    });
  });
define("appkit/tests/acceptance/helper-test", 
  [],
  function() {
    "use strict";
    var App;

    module("Acceptances - Helper", {
      setup: function(){
        App = startApp();
      },
      teardown: function() {
        Ember.run(App, 'destroy');
      }
    });

    test("helper output is rendered", function(){
      expect(1);

      visit('/helper-test').then(function(){
        ok(exists("h3:contains('My name is Ember.')"));
      });
    });
  });
define("appkit/tests/acceptance/index-test", 
  [],
  function() {
    "use strict";
    var App;

    module('Acceptances - Index', {
      setup: function(){
        App = startApp();
      },
      teardown: function() {
        Ember.run(App, 'destroy');
      }
    });

    test('index renders', function(){
      expect(3);

      visit('/').then(function(){
        var title = find('h2#title');
        var list = find('ul li');

        equal(title.text(), 'Welcome to Ember.js');

        equal(list.length, 3);
        equal(list.text(), 'redyellowblue');
      });
    });
  });
define("appkit/tests/helpers/resolver", 
  ["ember/resolver","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: 'appkit'
    };

    __exports__["default"] = resolver;
  });
define("appkit/tests/helpers/start-app", 
  ["appkit/app","appkit/router","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Application = __dependency1__["default"];
    var Router = __dependency2__["default"];

    function startApp(attrs) {
      var App;

      var attributes = Ember.merge({
        // useful Test defaults
        rootElement: '#ember-testing',
        LOG_ACTIVE_GENERATION:false,
        LOG_VIEW_LOOKUPS: false
      }, attrs); // but you can override;

      Router.reopen({
        location: 'none'
      });

      Ember.run(function(){
        App = Application.create(attributes);
        App.setupForTesting();
        App.injectTestHelpers();
      });

      App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

      return App;
    }

    __exports__["default"] = startApp;
  });
define("appkit/tests/unit/components/pretty-color-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var test = __dependency1__.test;
    var moduleForComponent = __dependency1__.moduleForComponent;

    moduleForComponent('pretty-color');

    test("changing colors", function(){
      var component = this.subject();

      Ember.run(function(){
        component.set('name','red');
      });

      // first call to $() renders the component.
      equal(this.$().attr('style'), 'color: red;');

      Ember.run(function(){
        component.set('name', 'green');
      });

      equal(this.$().attr('style'), 'color: green;');
    });

    test("className", function(){
      // first call to this.$() renders the component.
      ok(this.$().is('.pretty-color'));
    });

    test("template", function(){
      var component = this.subject();

      equal($.trim(this.$().text()), 'Pretty Color:');

      Ember.run(function(){
        component.set('name', 'green');
      });

      equal($.trim(this.$().text()), 'Pretty Color: green');
    });
  });
define("appkit/tests/unit/components/template-less-component-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var test = __dependency1__.test;
    var moduleForComponent = __dependency1__.moduleForComponent;


    moduleForComponent('template-less');

    test("template", function(){
      var component = this.subject();
      ok(this.$());
    });
  });
define("appkit/tests/unit/routes/index-test", 
  ["ember-qunit","appkit/routes/index"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var test = __dependency1__.test;
    var moduleFor = __dependency1__.moduleFor;


    var Index = __dependency2__["default"];

    moduleFor('route:index', "Unit - IndexRoute");

    test("it exists", function(){
      ok(this.subject() instanceof Index);
    });

    test("#model", function(){
      deepEqual(this.subject().model(), ['red', 'yellow', 'blue']);
    });
  });
//# sourceMappingURL=tests.js.map