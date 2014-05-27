App.FireBaseController = Ember.Controller.extend({
  dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/",
  multiRequest: function() {
    var response =  new Firebase(this.dataBaseLocation)
    response.once("value", function(data) {
      data.forEach(function(classroom) {
        App.ClassroomHolder.updateContent(classroom.val())
      })
      App.ClassroomHolder.reverseObjects()
    })
  },
  singleRequest: function(params) { //params = classroom_id
    new Firebase(this.dataBaseLocation)
    .once("value", function(data) {
      data.forEach(function(classroom) {
        App.FireBaseController.checkRoomMatch(classroom, params)
      })
    })
  },
  checkRoomMatch: function(classroom,params) {
    if (classroom.val().classroom_code === params) {
      this.initializeRoomWatch(classroom.hc.path.m[1])
    }
  },
  initializeRoomWatch: function(fireBaseRoom) {
    debugger
    var response =  new Firebase(this.dataBaseLocation + fireBaseRoom)
    response.on("value", function(data) {
      App.CurrentClassroom.updateAttributes(data.val())
      App.MasterViewController.refreshView()
    })
  },
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
}).create()

