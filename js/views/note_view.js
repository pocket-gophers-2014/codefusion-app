App.NoteView = Ember.View.extend({
  setCurrentNote: function() {
    var currentNote = App.NoteHolder.notes[App.CurrentFile.fileName]
    App.NoteView.updateNoteView(currentNote)
  },
  updateNoteView: function(currentNote) {
    if (currentNote) {
      $('#note-area').val(currentNote);
    } else {
      $('#note-area').val("")
    }
  },
  listenForKeystroke: function() {
    document.onkeyup = this.saveNote.bind(this)
  },
  saveNote: function() {
    var noteContent = $('#note-area').val()
    App.NoteHolder.notes[App.CurrentFile.fileName] = noteContent
  }
}).create();