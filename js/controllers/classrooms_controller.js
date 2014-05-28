App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    App.FirebaseAPI.initClassroomChangeListener(params.classroom_code)
    App.Classroom.set('classroomCode', params.classroom_code)
    App.NoteView.listenForKeystroke()
    return App.FolderModel
  },
  actions: {
    toggleFolder: function(object) {
      filtered = object.replace(/\//g, "\\+")
      $('#' + filtered).toggle()
      if (event != undefined) {
        $(event.target).toggleClass('closed')
    },
    download: function(){
      saveAs(App.Classroom.asZipDirectory().generate({type:'blob'}), App.Classroom.classroomCode)
    }
  }
});