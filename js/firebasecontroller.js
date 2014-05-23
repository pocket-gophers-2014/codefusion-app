
FireBaseController = {
  singleRequest: function(params) {
    var response =  new Firebase("https://radiant-fire-3325.firebaseio.com/classroom_list/" + params)
    response.on("value", function(data) {
      App.ClassroomHolder.updateContent(data)
    })
  },
  multiRequest: function() {
    response = new Firebase("https://radiant-fire-3325.firebaseio.com/classroom_list");
    response.on("value", function(data) {
      App.ClassroomHolder.set("content", [])
      data.forEach(function(classroom) {
        newRoom = App.ClassRoom.create(classroom.val())
        App.ClassroomHolder.pushObject(newRoom)
      })
    })

  }
}

// // method for adding new classroom
// // newClassroom = FireBaseRoomListener.push({ classroom_id: "ckwochs,", content: "def test 3 method end" })
