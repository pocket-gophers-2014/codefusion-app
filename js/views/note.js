//Add to index.html
App.NoteView = Ember.View.extend({
  listenForKeystroke: function(){
    document.onkeyup = this.saveNote.bind(this) //Isolate this to keystrokes done INSIDE the textarea, not anywhere else
  },
  saveNote: function(newFileId){
    var noteContent = $('#note-area').val()
    console.log("Inside saveNote. noteContent: " + noteContent)
    if(noteContent){
      var urlParts = window.location.hash.split('/')
      oldFileId = urlParts[urlParts.length - 1]
      App.NoteHolder.notes[oldFileId] = noteContent
    }
  },
  setNoteView: function(noteContent){
    $('#note-area').val(noteContent)
  },
  clearNoteView: function(){
    $('#note-area').val("")
  }
}).create()