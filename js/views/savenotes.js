App.SaveNotesOnClick = Ember.View.extend({
  click: function(event) {
    var textToWrite = $('#code')[0].innerText
    var textFileAsBlob = new Blob( [textToWrite] )
    var fileNameToSaveAs = ( $('#saveform')[0].value || $('#saveform')[0].placeholder )

    var downloadLink = document.createElement("a")
    downloadLink.download = fileNameToSaveAs
    downloadLink.innerHTML = "Download File"
    if (window.webkitURL != null)
    {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob)
    }
    else
    {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
      downloadLink.onclick = destroyClickedElement
      downloadLink.style.display = "none"
      document.body.appendChild(downloadLink)
    }

    downloadLink.click()
  }
})