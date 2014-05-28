//Add to index.html
App.NoteView = Ember.View.extend({
  listenForKeystroke: function(){
    document.onkeyup = this.saveNote.bind(this) //Isolate this to keystrokes done INSIDE the textarea, not anywhere else
  },
  saveNote: function(){
    var noteContent = $('#note-area').val()
    if(noteContent){
      App.NoteHolder.notes[App.CurrentFile.fileName] = noteContent
    }
  },
  setNoteView: function(noteContent){
    $('#note-area').val(noteContent)
  },
  clearNoteView: function(){
    $('#note-area').val("")
  }
}).create()