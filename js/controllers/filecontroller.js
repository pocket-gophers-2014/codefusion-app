App.FilesRoute = Ember.Route.extend({
  model: function() {
    return App.CurrentClassroom
  }
})

App.FileRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params.file_id)
    // BUG teacher code area not updating on firebase changes (fileholder is updating, but it is not refreshing view)
    return App.FileHolder.findBy('file_name', params.file_id)
  },
  afterModel: function() {
    App.MasterViewController.refreshView()
  }
})


