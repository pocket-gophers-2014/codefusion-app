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
  classroom_id: "",
  content: ""
  // classroomObserver: function() {
    // console.log("observer notified")
  // }.observes('name').on('init')
})

var classroomList = new Firebase("https://radiant-fire-3325.firebaseio.com/classroom_list");
classroomList.on("value", function(data) {
  App.ClassroomHolder.content = []
  data.forEach(function(classroom) {
    newRoom = App.ClassRoom.create(classroom.val())
    App.ClassroomHolder.pushObject(newRoom)
  })
})


// method for adding new classroom
// newClassroom = classroomList.push({ classroom_id: "lkoxrks", content: "def other method  test end" })

