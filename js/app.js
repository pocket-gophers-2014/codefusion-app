App = Ember.Application.create({
  // FireBaseController: function() {}
});


App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.Router.map(function() {
  this.resource('classrooms');
  this.resource('classroom', { path: '/classrooms/:classroom_id' });
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



// App.ClassroomController = Ember.Controller.extend({
//   queryParams: ['classroom'],
//   filteredRooms: function() {
//     // debugger
//     console.log('refiltering')
//     console.log(this.get('classroom'))
//     // console.log(App.ClassroomHolder.filterBy('page','Classroom'))
//     return App.ClassroomHolder.filterBy('page','/classrooms/:classroom_id')
//   }.property('model.@each')
// })
