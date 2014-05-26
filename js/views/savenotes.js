App.SaveNotesOnClick = Ember.View.extend({
  click: function(event) {
    var fileAsBlob = new Blob( [$('#mergedcontent')[0].innerText] )
    this.setFileName(fileAsBlob)
  },
  setFileName: function(file) {
    var fileNameToSaveAs = ( $('#saveform')[0].value || $('#saveform')[0].placeholder )
    var downloadLink = document.createElement("a")
    downloadLink.download = fileNameToSaveAs
    this.manageWebRequirements(downloadLink,file)

  },
  manageWebRequirements: function(downloadLink,file) {
    if (window.webkitURL != null) { // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(file)
    } else { // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(file)
      downloadLink.onclick = destroyClickedElement
      downloadLink.style.display = "none"
      document.body.appendChild(downloadLink)
    }
    downloadLink.click()
  }
})