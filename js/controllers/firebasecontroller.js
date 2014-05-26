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
      App.CurrentClassroom.updateAttributes(data.val())
      App.MasterViewController.refreshView()
    })
  }
}).create()

