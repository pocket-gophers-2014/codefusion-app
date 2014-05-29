App.ClassroomFiles = Ember.Object.extend({
  files: {},
  updateRoomFiles: function(fileName, newFileContent) {
    this._checkIfFileCurrentlyExists(fileName, newFileContent)
    this._checkAndSetCurrentlyModifiedFile(fileName, newFileContent)
    this._resetAllCurrentFileContent(fileName, newFileContent)
  },
  _checkIfFileCurrentlyExists: function(fileName, newFileContent) {
    if (this.files[fileName] === undefined) {
      this.files[fileName] = newFileContent
    }
  },
  _checkAndSetCurrentlyModifiedFile: function(fileName, newFileContent) {
    if (this.files[fileName] != newFileContent) {
      App.Classroom.set('currentlyModifiedFile', newFileContent)
    }
  },
  _resetAllCurrentFileContent: function(fileName, newFileContent) {
    this.files[fileName] = newFileContent
  }
}).create()