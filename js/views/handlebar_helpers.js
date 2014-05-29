Ember.Handlebars.helper('fileLinkMod', function(value, options) {
  if (value) {
    var filteredURL = value.replace(/\//g, "+")
    var lastIndex = filteredURL.lastIndexOf('+')
    var showValue = filteredURL.slice(lastIndex + 1, 500)
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
    var filteredURL = value.replace(/\//g, "+")
    return new Ember.Handlebars.SafeString('<div class="sub-directory" id=' + filteredURL + ">")
  }
})

Ember.Handlebars.helper('prettifyCode', function(value, options) {
  if (value !== 'Content loading...') {
    var preTaggedCode = new Ember.Handlebars.SafeString("<pre id='code' class='prettyprint linenums'></pre>")
    return preTaggedCode
  } else {
    return value
  }
})
