Ember.Handlebars.helper('fileLinkMod', function(value, options) {
  if (value) {
    var filteredURL = value.replace(/\//g, "+")
    var lastIndex = value.lastIndexOf('/')
    var showValue = value.slice(lastIndex + 1, 500)
    var route = '/#/classrooms/' + App.Classroom.classroomCode + '/files/' + filteredURL
    return new Ember.Handlebars.SafeString('<a href="' + route + '">' + showValue + '</a>')
  }
})

Ember.Handlebars.helper('folderNameFilter', function(value, options) {
  if (value) {
    var lastIndex = value.lastIndexOf('/')
    var showValue = value.slice(lastIndex+1, 500)
    return showValue
  }
})

Ember.Handlebars.helper('collapsableFolderFilter', function(value, options) {
  if (value) {
    filteredURL = value.replace(/\//g, "+")
    return new Ember.Handlebars.SafeString('<div class="sub-directory" id=' + filteredURL + ">")
  }
})

Ember.Handlebars.helper('prettifyCode', function(value, options) {
  if (value !== 'Content loading...') {
    // var preTaggedCode = new Ember.Handlebars.SafeString("<pre id='code' class='prettyprint linenums'>" + value + "</pre>")
    // NOTE: because we're using the SafeString method, we cannot put the value back into the pre tags, otherwise HTML files and script files will be executed.
    // To solve this, I modifed PrettifyView to inject current content prior to prettifying. This is not a very elegant solution, but it works for.
    // Ideal solution is to fix this helper method to inject the explicit value (code) into the new pre tags, not as a "safe string"
    var preTaggedCode = new Ember.Handlebars.SafeString("<pre id='code' class='prettyprint linenums'></pre>")
    return preTaggedCode
  } else {
    return value
  }
})
