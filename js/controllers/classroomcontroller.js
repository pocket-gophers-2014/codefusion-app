// trying to figure out how to get rid of one of these..
App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    return App.CurrentClassroom;
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    App.FireBaseController.singleRequest(params["classroom_id"]) // this is firebase data updates
  }
});
