App = Ember.Application.create();

App.Router.map(function(){
  this.route("classroom", {path: '/classrooms/:classroom_code'}) 
  this.route("files"), {path: '/files'}, function(){
    this.route('file'), {path: '/:id'}
  }
})

App.FilesRoute = Ember.Route.extend({
  model: function(){
    fire = new Firebase('https://radiant-fire-3325.firebaseio.com/classrooms/-JNvdQhwqS-V6mkAtfTA/content')
    var callback = function(data){
      rootDirectory = App.FilesRoute.prototype.makeEmberObjects(data.val())
    }
    fire.once('value', callback) 
    // return this.makeEmberObjects(rootDirectory) //I need to return this @^$^ing object!! How do I do it with this callback happening?
  },
  makeEmberObjects: function(JSONDirectory){
    var rootDirectory = App.Folder.create({name: JSONDirectory.folder_name, files: this.buildFiles(JSONDirectory.files), folders: this.buildFolders(JSONDirectory.folders)})
    return rootDirectory
  },
  buildFiles: function(JSONFiles){
    var files = []
    for (var i = 0; i < JSONFiles.length; i++){
      var file = JSONFiles[i]
      debugger
      files.push(App.File.create(file))
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
        folders.push(App.Folder.create(folder.folder_name, this.buildFiles(folder.files), this.buildFolders(folder.folders)))
      }
      return folders
    }
  }
})

App.FolderController = Ember.ObjectController.extend({
  isCollapsed: true,
  actions: {
    toggleFolder: function(object) {
      console.log(object)
      console.log(id)
      this.toggleProperty("isCollapsed");
    }
  }
})

App.Folder = Ember.Object.extend({
  init: function(folder){
    this.name = folder.name,
    this.files = folder.files,
    this.folders = folder.folders}
})

App.File = Ember.Object.extend({
  init: function(file){
    debugger
    this.name = file.file_name,
    this.content = file.file_content,
    this.path = file.file_path.replace('/', '-') //Replace this with real javascript! You can tell what it's supposed to to, right?
  },
  updateNote: function(note){
    this.note = note
  },
  updateContent: function(content){
    this.content = content;
  }
})