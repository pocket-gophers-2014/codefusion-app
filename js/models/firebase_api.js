App.FirebaseAPI = {
  dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/",

  initClassroomChangeListener: function(classroom_code) {
    new Firebase(this.dataBaseLocation)
    .once("value", function(data) {
      data.forEach(function(classroom) {
        App.FirebaseAPI.checkRoomMatch(classroom, classroom_code)
      })
    })
  },

  checkRoomMatch: function(classroom, params) {
    // rename params for classroomCode
    if (classroom.val().classroom_code === params) {
      var fireBaseUUID = classroom.hc.path.m[1]
      App.FirebaseAPI.setCurrentClassroomListener(fireBaseUUID)
    }
  },
  setCurrentClassroomListener: function(currentClassroomUUID) {
    var response =  new Firebase(this.dataBaseLocation + currentClassroomUUID)
    response.on("value", function(data) {
      console.log("response recieved")
      App.Classroom.set('content', data.val().content)
      App.FolderModel.checkForFileAdditionsOrRemovals(data.val().content)
      App.CurrentFile.parseNewContent(data.val().content)
    });
  }
};
