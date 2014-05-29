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
  makeResizeable: function() {
    var codeTableHeight = $('.code-table').height()
    var maxAllowedCodeHeight = codeTableHeight * 0.8
    $( ".code-row" ).resizable({alsoResize: ".note-row",
                                maxHeight: maxAllowedCodeHeight}, 's');
  },
  updateNotePane: function(currentNote) {
    if (currentNote) {
      $('#note-area').val(currentNote);
    } else {
      $('#note-area').val("")
    }
  }
}

