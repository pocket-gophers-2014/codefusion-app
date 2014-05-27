App.ChildController = Ember.ObjectController.extend({
  isCollapsed : true,
  actions : {
    toggleIsCollapsed : function() {
      this.toggleProperty("isCollapsed");
    }
  }
});

  makeEmberObjects: function(JSONDirectory){
    var rootDirectory = App.Folder.create(JSONDirectory.folder_name, this.buildFiles(JSONDirectory.files), this.buildFolders(JSONDirectory.folders)
    return rootDirectory
  },
  buildFiles: function(JSONFiles){
    var files = []
    for (var i = 0; i < JSONFiles.length; i++){
      var file = JSONFiles[i]
      files.push(App.File.create(file.file_name, file.file_content))
    }
    return files
  },
  buildFolders:function(JSONFolders){
    if(JSONFolders == []){
      return []
    }
    else{
      var folders = []
      for (var i = 0; i< JSONFolders.length; i++){
        var folder = JSONFolders[i]
        folders.push(App.Folder.create(folder.folder_name, this.buildFiles(folder.files), this.buildFolders(folder.folders))
      }
      return folders
    }
  }