App.FolderModel = Ember.Object.extend({
  content: {},
  fileCount: 0,
  previousFileCount: 0,
  checkForFileAdditionsOrRemovals: function(folder) {
    this.set('previousFileCount', 0)
    this.checkFiles(folder)
    if (this.fileCount != this.previousFileCount) {
      this.set('fileCount', this.previousFileCount)
      this.set('content', folder )
    }
  },
  checkFiles: function(parentFolder) {
    if (parentFolder.files !== undefined) {
      for (var i = 0; i < parentFolder.files.length; i++) {
        App.FolderModel.previousFileCount += 1
      }
    }
    if (parentFolder.folders !== undefined) {
      App.FolderModel.cycleFolders(parentFolder.folders)
    }
  },
  cycleFolders: function(folder) {
    for (var i = 0; i < folder.length; i ++) {
      App.FolderModel.checkFiles(folder[i])
    }
  }
}).create()