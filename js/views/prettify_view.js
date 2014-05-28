App.PrettifyView = Ember.View.extend({
  refresh: function() {
    $('pre').removeClass('prettyprinted')
    $('pre#code').text(App.CurrentFile.fileContent)
    $('pre').each(function() { prettyPrint() })
  }
}).create()
