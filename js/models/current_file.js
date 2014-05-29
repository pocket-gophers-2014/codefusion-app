App.CurrentFile = Ember.Object.extend({
  fileContent: "Content loading...",
  fileName: null,
  parseForNewContent: function(allFileData) {
    if (allFileData) {
      this.checkFiles(allFileData)
    }
  },
  checkFiles: function(parentFolder) {
    if (parentFolder.files !== undefined) {
      for (var i = 0; i < parentFolder.files.length; i++) {
        var iterFileName = parentFolder.files[i].file_name.replace(/\//g, "+")
        App.ClassroomFiles.updateRoomFiles(iterFileName, parentFolder.files[i].file_content)
        this.findCurrentFilebyMatch( iterFileName,  parentFolder.files[i].file_content )
      }
    }
    this.cycleFolders(parentFolder.folders)
  },
  cycleFolders: function(folder) {
    if (folder !== undefined) {
      for (var i = 0; i < folder.length; i ++) {
        this.checkFiles(folder[i])
      }
    }
  },
  findCurrentFilebyMatch: function(newFileName,  fileContent) {
    if (newFileName == this.fileName) {
      this.set('fileContent', fileContent)
    }
  }
}).create();