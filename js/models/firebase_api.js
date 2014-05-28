App.FirebaseAPI = {
  dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/",

  initClassroomChangeListener: function(classroom_code) {
    var currentClassroomUUID
    new Firebase(this.dataBaseLocation)
    .once("value", function(data) {
      data.forEach(function(classroom) {
        App.FirebaseAPI.checkRoomMatch(classroom, classroom_code)
      })
    })
  },

  checkRoomMatch: function(classroom, params) {
    if (classroom.val().classroom_code === params) {
      var fireBaseUID = classroom.hc.path.m[1]
      App.FirebaseAPI.setCurrentClassroomListener(fireBaseUID)
    }
  },

  setCurrentClassroomListener: function(currentClassroomUUID) {
    var response =  new Firebase(this.dataBaseLocation + currentClassroomUUID)
    response.on("value", function(data) {
      console.log("response recieved")
      App.Classroom.set('content', data.val().content)
      App.CurrentFile.parseNewContent(data.val().content)
    });
  }
};
