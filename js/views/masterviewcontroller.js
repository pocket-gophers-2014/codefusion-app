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




Ember.Handlebars.helper('fileLinkMod', function(value,options){
  if (value) {
    var filteredURL = value.replace(/\//g, "\\")
    var route = window.location.hash + "/" + filteredURL
    var lastIndex = value.lastIndexOf('/')
    var showValue = value.slice(lastIndex+1,500)
    return new Ember.Handlebars.SafeString('<a href=' + route + ">" +  showValue +  "</a>")
  }
})





Ember.Handlebars.helper('collapsableFolderFilter', function(value, options) {
  if (value) {
    filteredURL = value.replace(/\//g, "-")
    return new Ember.Handlebars.SafeString('<div id=' + filteredURL + ">")
  }
})

Ember.Handlebars.helper('folderNameFilter', function(value, options) {
  if (value) {
    var lastIndex = value.lastIndexOf('/')
    var showValue = value.slice(lastIndex+1,500)
    return showValue
  }
})

