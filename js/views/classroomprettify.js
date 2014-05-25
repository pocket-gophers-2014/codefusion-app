App.NotesView = Ember.View.extend({
  refresh: function() {
    var pretty = function(prettify) {

      $('pre').removeClass('prettyprinted')
      $('pre').each(function() { prettyPrint() })
    }
    setTimeout(pretty, 1)
  }
}).create()