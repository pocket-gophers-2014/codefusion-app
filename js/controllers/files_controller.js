App.FileRoute = Ember.Route.extend({
  beforeModel: function(params) {
    var preURL = '/classrooms/' + App.Classroom.classroomCode + '/files/'
    var formattedFileName = params.intent.url.replace(preURL, "")
    App.CurrentFile.set('fileName', formattedFileName)
    App.CurrentFile.parseNewContent(App.Classroom.content)
  },

  model: function() {
    return App.CurrentFile
  }
});
