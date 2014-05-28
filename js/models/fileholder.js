App.FileHolder = Ember.ArrayController.create({
  content: [],
  buildFiles: function(parentFolder) {
    if (parentFolder.files !== undefined) {
      for (var i = 0; i < parentFolder.files.length; i++) {
        var file_name = parentFolder.files[i].file_name.replace(/\//g, "\\")
        var file_content = parentFolder.files[i].file_content
        var file = App.File.create({file_content: file_content, file_name: file_name})
        App.FileHolder.pushObject(file)
      }
    }
    if (parentFolder.folders !== undefined) {
      App.FileHolder.cycleFolders(parentFolder.folders)
    }
  },
  cycleFolders: function(folder) {
    for (var i = 0; i < folder.length; i ++) {
      App.FileHolder.buildFiles(folder[i])
    }
  }
})


App.File = Ember.Object.extend({
  file_name: "",
  file_content: "",
  notes: ""
})