App.FileRoute = Ember.Route.extend({
  beforeModel: function(params) {
    var preURL = '/classrooms/' + App.Classroom.classroomCode + '/files/'
    var formattedFileName = params.intent.url.replace(preURL, "")
    App.CurrentFile.set('fileName', formattedFileName)
    App.CurrentFile.parseForNewContent(App.Classroom.content)
    App.NoteHolder.setCurrentNote()
  },

  model: function(params) {
    return App.CurrentFile
  },

  reprettify: function() {
    App.PrettifyView.refresh()
    App.View.makeResizeable() // could put this in a better place
  }.observes('App.CurrentFile.fileContent')
});