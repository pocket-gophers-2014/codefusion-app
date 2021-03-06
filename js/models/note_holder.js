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
  },
  generateCumulativeNotes: function(){
    var cumulativeNoteString = ""
    var notes = App.NoteHolder.notes
    for (var associatedFilePath in notes){
      if (notes[associatedFilePath] !== null){
        cumulativeNoteString += ("--------" + associatedFilePath.replace("+", "/") + "\n" + notes[associatedFilePath] + '\n\n')
      }
    }
    return cumulativeNoteString
  }
}).create();