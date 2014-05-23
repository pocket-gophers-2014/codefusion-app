var FireBaseRoomListener = new Firebase("https://radiant-fire-3325.firebaseio.com/classroom_list");
FireBaseRoomListener.on("value", function(data) {
  App.ClassroomHolder.set("content", [])
  data.forEach(function(classroom) {
    newRoom = App.ClassRoom.create(classroom.val())
    App.ClassroomHolder.pushObject(newRoom)
  })
})

// method for adding new classroom
// newClassroom = FireBaseRoomListener.push({ classroom_id: "ckwochs,", content: "def test 3 method end" })