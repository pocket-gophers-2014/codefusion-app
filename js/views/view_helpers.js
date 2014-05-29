App.View = {
  toggleFolder: function(object,event) {
    filtered = object.replace(/\//g, "\\+")
    $('#' + filtered).toggle(300)
    if (event != undefined) {
      $(event.target).toggleClass('closed')
    }
  },
  toggleFile: function() {
    $.each($('.highlighted'), function(index, value) {
      value.className = ""
    })
    if ($(event.target).is( "a" )) {
      event.target.className = "highlighted" + event.target.className
    }
  },
  initializeFolderLayout: function() {
    setTimeout(function() {
     $('li').first().click()
     $('ul').first().on('click',App.View.toggleFile)
    }, 2)
  },
  toggleNoteView: function() {
    $('.note-row').toggle();
    $('.code-view hr').toggle();
    $('.code-row').toggleClass('unsplit')
  },
  updateNotePane: function(currentNote) {
    if (currentNote) {
      $('#note-area').val(currentNote);
    } else {
      $('#note-area').val("")
    }
  }
}

