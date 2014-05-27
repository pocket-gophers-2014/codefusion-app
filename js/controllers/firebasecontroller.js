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
      var fireBaseUID = classroom.hc.path.m[1]
      this.initializeRoomWatch(fireBaseUID)
    }
  },
  initializeRoomWatch: function(fireBaseRoom) {
    var response =  new Firebase(this.dataBaseLocation + fireBaseRoom)
    response.on("value", function(data) {
      console.log("response received")
      App.FileHolder.set('content', [])
      App.CurrentClassroom.updateAttributes(data.val())
      App.FileHolder.buildFiles(data.val().content)
      //
    })
  }
}).create()

