App = Ember.Application.create({ });

App.IndexRoute = Ember.Route.extend({
  model: function() {
    newRequest = FireBaseController.multiRequest()
    return App.ClassroomHolder
  }
});

App.Router.map(function() {
  this.resource('classrooms', function(){
    this.resource('classroom', {'path': '/:classroom_id'})
  })
  // this.resource('classrooms');
  // this.resource('classroom', { path: '/classrooms/:classroom_id' });

});


App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    newRequest = FireBaseController.multiRequest()
    return App.ClassroomHolder;
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    newRequest = FireBaseController.singleRequest(params.classroom_id)
    return App.ClassroomHolder
  }
});

App.ApplicationView = Ember.View.extend({
  didInsertElement: function() {
    this.$('pre').each(function() {prettyPrint()});
    // this.$('pre.prettyPrint').style('width')
  }
});


App.ClassroomHolder = Ember.ArrayController.create({
  content: [],
  updateContent: function(data) {
    this.set("content", [])
    newRoom = App.ClassRoom.create(data.val())
    this.pushObject(newRoom)
  }
})

App.ClassRoom = Ember.Object.extend({
  classroom_id: "",
  content: ""
  // classroomObserver: function() {
    // console.log("observer notified")
  // }.observes('name').on('init')
})



App.ClassroomController = Ember.Controller.extend({
  actions: {
    updateData: function() {
      console.log("updating data")
    }
  }
})
