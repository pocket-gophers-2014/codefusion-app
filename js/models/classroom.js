App.Classroom = Ember.Object.extend({
  content: null,
  classroomCode: null,
  files: {},
  currentlyModifiedFile: "loading..",
  updateRoomFiles: function(fileName, fileContent) {
    if (this.files[fileName] === undefined) {
      this.files[fileName] = fileContent
    }
    if (this.files[fileName] != fileContent) {
      App.FolderModel.set('currentlyModifiedFile', fileName)
    }
    this.files[fileName] = fileContent
  }
}).create();