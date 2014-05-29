App.ClassroomFiles = Ember.Object.extend({
  files: {},
  updateRoomFiles: function(fileName, fileContent) {
    // naming convention? general clarity of naming...
    if (this.files[fileName] === undefined) {
      this.files[fileName] = fileContent
    }
    if (this.files[fileName] != fileContent) {
      App.Classroom.set('currentlyModifiedFile', fileName)
    }
    this.files[fileName] = fileContent
  },
}).create()