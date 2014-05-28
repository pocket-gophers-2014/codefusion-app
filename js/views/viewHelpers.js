Ember.Handlebars.helper('fileLinkMod', function(value, options) {
  if (value) {
    var filteredURL = value.replace(/\//g, "+")
    var lastIndex = value.lastIndexOf('/')
    var showValue = value.slice(lastIndex + 1, 500)
    var route = '/#/classrooms/' + App.Classroom.classroomCode + '/files/' + filteredURL
    return new Ember.Handlebars.SafeString('<a href="' + route + '">' + showValue + '</a>')
  }
})