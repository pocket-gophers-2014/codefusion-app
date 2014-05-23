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