App.IndexRoute = Ember.Route.extend({
  model: function() {
    // reset values and initialize new firebase request
    App.ClassroomHolder.set("content", [])
    App.CurrentClassroom.set('classroom_code',"")
    App.CurrentClassroom.set('file_content',"")

    var newRequest = FireBaseController.multiRequest()
    return App.ClassroomHolder
  }
});