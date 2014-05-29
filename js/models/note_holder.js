App.NoteHolder = Ember.Object.extend({
  notes: {},
  setCurrentNote: function() {
    var currentNote = App.NoteHolder.notes[App.CurrentFile.fileName]
    App.View.updateNotePane(currentNote)
  },
  listenForKeystroke: function() {
    document.onkeyup = App.NoteHolder.saveNote.bind(this)
  },
  saveNote: function() {
    var noteContent = $('#note-area').val()
    this.notes[App.CurrentFile.fileName] = noteContent
  }
}).create();