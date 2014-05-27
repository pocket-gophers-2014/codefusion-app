App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    App.MasterViewController.initializeNoteListener()
    return App.CurrentClassroom;
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    App.FireBaseController.singleRequest(params["classroom_id"])
  }//,
  // actions: {
  //   toggleFolder: function(object) {
  //     console.log(object)
  //     console.log(id)
  //     this.toggleProperty("isCollapsed");
  //   }
  // }
});

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
  create: function(name, files, folders){
    name: name,
    files: files,
    folders: folders}
})

App.File = Ember.Object.extend({
  create: function(name, content){
    name: name,
    content: content
  },
  updateNote: function(note){
    this.note = note
  },
  updateContent: function(content){
    this.content = content;
  }
})




{{outlet}}

App.File = Ember.Object.extend({

})