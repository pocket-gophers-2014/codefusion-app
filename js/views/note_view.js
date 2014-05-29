App.NoteView = Ember.View.extend({
  listenForKeystroke: function() {
    document.onkeyup = this.saveNote.bind(this)
  },
  saveNote: function() {
    var noteContent = $('#note-area').val()
    App.NoteHolder.notes[App.CurrentFile.fileName] = noteContent
  },
  setCurrentNote: function() {
    var currentNote = App.NoteHolder.notes[App.CurrentFile.fileName]
    App.NoteView.updateNoteView(currentNote)
  },
  updateNoteView: function(currentNote) {
    $('#note-area').val(currentNote);
  }
}).create();