// trying to figure out how to get rid of one of these..
App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    console.log("updating classrooms route")
    return App.CurrentClassroom;
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    console.log("updating room route")
    // this is firebase data updates
    newRequest = FireBaseController.singleRequest(params["classroom_id"])
  }
});


