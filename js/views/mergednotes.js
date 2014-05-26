renderMergedContent = function() {
  var note = document.querySelector('#note').value
  splitNote = note.split("\n")

  var code = document.querySelector('#code').innerText
  splitCode = code.split("\n")

  var mergedContent = []
  for ( i = 0; i < splitCode.length - 1 ; i++ ) { // bugs if only 1 line of code in #code page
    mergedContent.push(splitCode[i])
    if (splitNote[i]) {
      mergedContent.push("//" + splitNote[i])  // add conditional for file type // vs #
    };
  }
  mergedContent = mergedContent.join("\n")
  document.querySelector('#mergedcontent').innerHTML = mergedContent
  $('pre').removeClass('prettyprinted')
  $('pre').each(function() { prettyPrint() })
}

document.onkeyup = renderMergedContent

// key listener should only be initialized in room watch