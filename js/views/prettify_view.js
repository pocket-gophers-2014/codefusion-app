App.PrettifyView = Ember.View.extend({
  refresh: function() {
    setTimeout(function() {
      $('pre').removeClass('prettyprinted')
      $('pre#code').text(App.CurrentFile.fileContent)
      $('pre').each(function() { prettyPrint() })
    }, 2)
  }
}).create()