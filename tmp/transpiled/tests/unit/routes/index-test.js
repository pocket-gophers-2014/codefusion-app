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