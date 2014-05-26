App.SaveNotesOnClick = Ember.View.extend({
  click: function(event) {
    var textFileAsBlob = new Blob( [$('#code')[0].innerText] )
    var fileNameToSaveAs = ( $('#saveform')[0].value || $('#saveform')[0].placeholder )
    var downloadLink = document.createElement("a")
    downloadLink.download = fileNameToSaveAs
    this.manageWebRequirements(downloadLink,textFileAsBlob)
  },
  manageWebRequirements: function(downloadLink,textfile) {
    if (window.webkitURL != null) { // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textfile)
    } else { // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textfile)
      downloadLink.onclick = destroyClickedElement
      downloadLink.style.display = "none"
      document.body.appendChild(downloadLink)
    }
    downloadLink.click()
  }
})