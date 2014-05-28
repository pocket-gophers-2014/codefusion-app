App.CurrentFile = Ember.Object.extend({
  fileContent: "Content loading...",
  fileName: null,

  parseNewContent: function(allFileData) {
    if (allFileData) {
      App.CurrentFile.checkFiles(allFileData)
    }
  },

  checkFiles: function(parentFolder) {
    if (parentFolder.files !== undefined) {
      for (var i = 0; i < parentFolder.files.length; i++) {
        var iterFileName = parentFolder.files[i].file_name.replace(/\//g, "+")
        if (iterFileName == App.CurrentFile.fileName) {
          App.CurrentFile.set('fileContent', parentFolder.files[i].file_content)
        }
      }
    }

    if (parentFolder.folders !== undefined) {
      App.CurrentFile.cycleFolders(parentFolder.folders)
    }
  },

  cycleFolders: function(folder) {
    for (var i = 0; i < folder.length; i ++) {
      App.CurrentFile.checkFiles(folder[i])
    }
  }
}).create();