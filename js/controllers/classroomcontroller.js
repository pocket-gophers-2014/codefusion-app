App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    App.MasterViewController.initializeNoteListener()
    return App.CurrentClassroom
  },
  afterModel: function() {
    App.MasterViewController.refreshView()
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    App.FireBaseController.singleRequest(params["classroom_id"])
  },
  actions: {
    toggleFolder: function(object) {
      filtered = object.replace(/\//g, "-")
      var target = $('#' + filtered)
      target.toggle()
    }
  }
});

