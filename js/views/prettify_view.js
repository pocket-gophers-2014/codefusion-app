App.PrettifyView = Ember.View.extend({
  refresh: function() {
    $('pre').removeClass('prettyprinted')
    // $('pre#code span').remove()
    // $('pre#code').text(App.CurrentFile.fileContent)
    $('pre').each(function() { prettyPrint() })
  }
}).create()
