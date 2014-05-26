App.LeaderCodeView = Ember.View.extend({
  refresh: function() {
    var prettify = function() {
      $('pre').removeClass('prettyprinted')
      $('pre').each(function() { prettyPrint() })
    }
    setTimeout(prettify, 1)
  }
}).create()

