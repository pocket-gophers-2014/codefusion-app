App = Ember.Application.create();

App.Router.map(function() {
  this.resource('classrooms');
  this.resource('classroom', { path: '/classrooms/:classroom_id' });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    // return ['red', 'yellow', 'blue'];
  }
});

App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    return App.ClassroomHolder;
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    return App.ClassroomHolder//.findBy('classroom_id', params.classroom_id)
  }
});

//////////////////////////////////////////////////////////////////////////////////////////



App.ClassroomHolder = Ember.ArrayController.create({
  // content: []
})

App.ClassRoom = Ember.Object.extend({
  // classroomObserver: function() {
    // console.log("observer notified")
  // }.observes('name').on('init')
})

var fb = new Firebase("https://radiant-fire-3325.firebaseio.com/");
fb.on("value", function(data) {
  formattedData = data.val() ? data.val().name : "";
  newRoom = App.ClassRoom.create({classroom_id: data.val().classroom_id, name: data.val().name })
  console.log(newRoom)
  App.ClassroomHolder.pushObject(newRoom)
  // console.log(App.ClassroomHolder.content)
})

// fb.set({ classroom_id: "2", name: "pants" })

var roomOne = App.ClassRoom.create({
  classroom_id: "1",
  name: "less fun"
})
App.ClassroomHolder.pushObject(roomOne)