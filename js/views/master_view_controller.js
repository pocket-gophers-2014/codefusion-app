App.MasterViewController = Ember.Controller.extend({
  refreshView: function() {
    var refresh = function() {
      // App.MergedContentView.renderMergedContent()
      App.PrettifyView.refresh()
    }
    setTimeout(refresh, 2)
  },
  initializeNoteListener: function() {
    App.MergedContentView.listenForKeystroke()
  }
}).create()

