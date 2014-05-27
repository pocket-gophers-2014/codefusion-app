App.MasterViewController = Ember.Controller.extend({
  refreshView: function() {
    var refresh = function() {
      // App.MergedContentView.renderMergedContent()
      App.PrettifyView.refresh()
    }
    setTimeout(refresh, 1)
  },
  initializeNoteListener: function() {
    App.MergedContentView.listenForKeystroke()
  }
}).create()

