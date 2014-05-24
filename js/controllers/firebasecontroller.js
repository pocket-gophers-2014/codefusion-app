FireBaseController = {

  // NEED TO HIDE IN ENV OR SET PASSWORD
  dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/",
  multiRequest: function(params) {
    var response =  new Firebase(this.dataBaseLocation)
    response.once("value", function(data) {
      data.forEach(function(classroom) {
        newRoom = App.Classroom.create(classroom.val())
        App.ClassroomHolder.pushObject(newRoom)
      })
    })
  },
  singleRequest: function(params) {
    new Firebase(this.dataBaseLocation)
    .once("value", function(data) {
      data.forEach(function(classroom) {
        FireBaseController.checkRoomMatch(classroom, params)
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
      console.log('response received')
      App.CurrentClassroom.set('classroom_code',data.val().classroom_code)
      App.CurrentClassroom.set('file_content',data.val().file_content)
    })
  }
}

// // method for adding new classroom
// newClassroom = FireBaseRoomListener.push({ classroom_code: "ckwochs,", file_content: "def test 3 method end", file_name: "test_99.rb" })
