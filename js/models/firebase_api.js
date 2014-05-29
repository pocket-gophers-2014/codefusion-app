App.FirebaseAPI = {
  dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/",
  initClassroomChangeListener: function(classroom_code) {
    new Firebase(this.dataBaseLocation)
    .once("value", function(data) {
      data.forEach(function(classroom) {
        if ( App.FirebaseAPI.checkRoomMatch(classroom, classroom_code)) {
          roomMatch = true
        }
      })
      if (roomMatch !== true ){
       document.location.href = '/';
      }
    })
  },
  checkRoomMatch: function(classroom, params) {
    if (classroom.val().classroom_code === params) {
      var fireBaseUUID = classroom.hc.path.m[1]
      App.FirebaseAPI.setCurrentClassroomListener(fireBaseUUID)
      return true
    }
  },
  setCurrentClassroomListener: function(currentClassroomUUID) {
    var response =  new Firebase(this.dataBaseLocation + currentClassroomUUID)
    response.on("value", function(data) {
      console.log("response recieved")
      var fileContents = data.val().content

      App.Classroom.set('content', fileContents)
      App.ClassroomFolders.checkForFileAdditionsOrRemovals(fileContents)
      App.CurrentFile.parseForNewContent(fileContents)
    });
  }
};

