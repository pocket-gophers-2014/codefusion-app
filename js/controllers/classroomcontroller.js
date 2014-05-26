// trying to figure out how to get rid of one of these..
App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    App.MasterViewController.initializeNoteListener()
    return App.CurrentClassroom;
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    App.FireBaseController.singleRequest(params["classroom_id"])
  }
});