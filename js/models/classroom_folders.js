App.ClassroomFolders = Ember.Object.extend({
  fileCount: 0,
  previousFileCount: 0,
  checkForFileAdditionsOrRemovals: function(folder) { // name changes.. refresh folders button?
    this.set('fileCount', 0)
    this._countFiles(folder)
    if (this.fileCount != this.previousFileCount) {
      this._updateAttributes(this.fileCount,folder)
    }
  },
  _countFiles: function(parentFolder) {
    if (parentFolder.files !== undefined) {
      for (var i = 0; i < parentFolder.files.length; i++) {
        this.fileCount += 1
      }
    }
    this._cycleFolders(parentFolder.folders)
  },
  _cycleFolders: function(folder) {
    if (folder !== undefined) {
      for (var i = 0; i < folder.length; i ++) {
        this._checkFiles(folder[i])
      }
    }
  },
  _updateAttributes: function(fileCount,folder) {
    this.set('previousFileCount', fileCount)
    App.Classroom.set('folders', folder)
    App.View.initializeFolderLayout()
  }
}).create()