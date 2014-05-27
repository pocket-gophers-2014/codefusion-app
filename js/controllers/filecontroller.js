App.FilesRoute = Ember.Route.extend({
  model: function() {
    return App.CurrentClassroom
  }
})

App.FileRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params.file_id)
    
    // NOTE STUFF
    var file = App.FileHolder.findBy('file_name', params.file_id)
    var note = App.NoteHolder.notes[params.file_id]

    // console.log("Inside FileRoute.model. file: " + file + " note: " + note)

    if (note){
      file.note = note
      App.NoteView.setNoteView(note)
    }
    else{
      App.NoteView.clearNoteView()
    }

    //Return the file
    return file
  },
  afterModel: function() {
    App.MasterViewController.refreshView()
  },
  actions: {
    
  }
})


