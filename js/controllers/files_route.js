App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    App.FirebaseAPI.initClassroomChangeListener(params.classroom_code)
    App.Classroom.set('classroomCode', params.classroom_code)
    return App.Classroom
  },

  afterModel: function() {
    // this.transitionTo('files')
    // this breaks detail route, fix later
  }
});

App.Classroom = Ember.Object.extend({
  content: null,
  classroomCode: null
}).create();

App.FileRoute = Ember.Route.extend({
  beforeModel: function(params) {
    console.log("In beforeModel")
    var preURL = '/classrooms/' + App.Classroom.classroomCode + '/files/'
    var formattedFileName = params.intent.url.replace(preURL, "")
    App.CurrentFile.set('fileName', formattedFileName)
    debugger
  },

  model: function() {
    return App.CurrentFile
  }
});

App.CurrentFile = Ember.Object.extend({
  fileContent: "something",
  fileName: null,

  parseNewContent: function(allFileData) {
    App.CurrentFile.checkFiles(allFileData)
  },

  checkFiles: function(parentFolder) {
    if (parentFolder.files !== undefined) {
      for (var i = 0; i < parentFolder.files.length; i++) {
        var iterFileName = parentFolder.files[i].file_name.replace(/\//g, "+")
        if (iterFileName == App.CurrentFile.fileName) {
          console.log("this should be the right file...")
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
