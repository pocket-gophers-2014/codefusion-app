var FireBaseRoomListener = new Firebase("https://radiant-fire-3325.firebaseio.com/classroom_list");
FireBaseRoomListener.on("value", function(data) {
  App.ClassroomHolder.content = []
  data.forEach(function(classroom) {
    newRoom = App.ClassRoom.create(classroom.val())
    App.ClassroomHolder.pushObject(newRoom)
  })
})

// method for adding new classroom
// newClassroom = classroomList.push({ classroom_id: "lkoxrks", content: "def other method  test end" })