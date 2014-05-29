App.NoteHolder = Ember.Object.extend({
  notes: {},
  generateCumulativeNotes: function(){
    var cumulativeNoteString = ""
    var notes = App.NoteHolder.notes
    for (var note in notes){
      if (note !== null){
        cumulativeNoteString += ("--------" + note + "\n" + notes[note] + '\n\n')
      }
    }
    return cumulativeNoteString
  }
}).create();