App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    App.FirebaseAPI.initClassroomChangeListener(params.classroom_code)
    App.Classroom.set('classroomCode', params.classroom_code)
    App.NoteView.listenForKeystroke()
    return App.Classroom
  }
});