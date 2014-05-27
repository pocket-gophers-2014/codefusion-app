App.FireBaseController = Ember.Controller.extend({
  dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/", // need to investigate security..
  singleRequest: function(params) {
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
    var response =  new Firebase(this.dataBaseLocation + fireBaseRoom)
    response.on("value", function(data) {
      // App.CurrentClassroom.updateAttributes(data.val())
      App.CurrentClassroom.updateAttributes(fbResponse) /////////////////////////// temporary
      App.MasterViewController.refreshView()
    })
  }
}).create()



fbResponse = {class_code: "abcdef", data:{folder_name: "Rails app",
files:  [{file_name: "config.rb",file_content: "some info here"}, {file_name: "routes.rb", file_content: "resources: users"}],
folders: [
            { folder_name: "App",
              files: [{file_name: "helper.rb",file_content: "helper info"}, {file_name: "other.rb", file_content: "some data"}],
              folders: [
                {folder_name: "Controllers",
                  files: [{file_name: "ApplicationController.rb",file_content: "new index info"},{file_name: "SessionsController.rb",file_content: "new create method"}]}
              ]  },

            { folder_name: "database",
              files: [{file_name: "data.rb",file_content: "lots of data"}],
              folders: [] }
          ]
}
}