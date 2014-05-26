App.MergedContentView = Ember.View.extend({
  listenForKeystroke: function() {
    document.onkeyup = this.renderMergedContent.bind(this)
  },
  renderMergedContent: function() {
    splitCode = this._splitCode()
    splitNote = this._splitNotes()
    commentType = this._checkFileType()
    mergedContent = this._spliceContent(splitNote,splitCode,commentType)
    this._appendDom(mergedContent)
  },
  _splitNotes: function() {
    var note = document.querySelector('#note').value
    return splitNote = note.split("\n")
  },
  _splitCode: function() {
    var code = document.querySelector('#code').innerText
    return splitCode = code.split("\n")
  },
  _checkFileType: function() {
    if (App.CurrentClassroom.file_name.slice(-2) == "js") {
      return "// "
    } if (App.CurrentClassroom.file_name.slice(-2) == "rb") {
      return "# "
    } else {
      return ""
    }
  },
  _spliceContent: function(notes,code,commentType) {
    var mergedContent = []
    contentLength = Math.max(notes.length,code.length,1)
    for ( i = 0; i < contentLength ; i++ ) {
      mergedContent.push(splitCode[i])
      if (splitNote[i]) {
        mergedContent.push(commentType + splitNote[i])
      };
    }
    return mergedContent = mergedContent.join("\n")
  },
  _appendDom:function(mergedContent) {
    document.querySelector('#mergedcontent').innerHTML = mergedContent
    App.PrettifyView.refresh()
  }
}).create()

