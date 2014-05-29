App.View = {
  toggleFolder: function(object,event) {
    filtered = object.replace(/\//g, "\\+")
    $('#' + filtered).toggle()
    if (event != undefined) {
      $(event.target).toggleClass('closed')
    }
  },
  initializeFolderLayout: function() {
    setTimeout(function() {
     $('li').first().click()
    }, 2)
  },
  toggleNoteView: function() {
    $('.note-row').toggle();
  },
  makeResizeable: function() {
    var codeTableHeight = $('.code-table').height()
    var maxAllowedCodeHeight = codeTableHeight * 0.8
    $( ".code-row" ).resizable({alsoResize: ".note-row",
                                maxHeight: maxAllowedCodeHeight}, 's');
  }
}