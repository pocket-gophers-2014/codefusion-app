
FireBaseController = {
  multiRequest: function(params) {
    var response =  new Firebase("https://radiant-fire-3325.firebaseio.com/classroom_list")
    response.on("value", function(data) {
      App.ClassroomHolder.set("content", [])
      data.forEach(function(classroom) {
        newRoom = App.ClassRoom.create(classroom.val())
        App.ClassroomHolder.pushObject(newRoom)
      })
    })
  },
  singleRequest: function(params) {
    FBController = this
    App.ClassroomHolder.set("content", [])
    new Firebase("https://radiant-fire-3325.firebaseio.com/classroom_list")
    .once("value", function(data) {
      data.forEach(function(classroom) {
        FBController.checkRoomMatch(classroom, params)
      })
    })
  },
  checkRoomMatch: function(classroom,params) {
    if (classroom.val().classroom_id === params) {
      this.initializeRoomWatch(classroom.hc.path.m[1])
    }
  },
  initializeRoomWatch: function(fireBaseRoom) {
    var response =  new Firebase("https://radiant-fire-3325.firebaseio.com/classroom_list/" + fireBaseRoom)
    response.on("value", function(data) {
      App.ClassroomHolder.updateContent(data)
    })
  }
}

// // method for adding new classroom
// // newClassroom = FireBaseRoomListener.push({ classroom_id: "ckwochs,", content: "def test 3 method end" })
