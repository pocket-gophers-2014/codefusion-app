App.FirebaseAPI = {
  dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/",
  initClassroomChangeListener: function(classroom_code) {
    new Firebase(this.dataBaseLocation)
    .once("value", function(data) {
      var numMatches=0
      data.forEach(function(classroom) {
        numMatches=numMatches+App.FirebaseAPI.checkRoomMatch(classroom, classroom_code)
      })
      if (numMatches<1){
       document.location.href = '/';
      }
    })
  },
  checkRoomMatch: function(classroom, params) {
    if (classroom.val().classroom_code === params) {
      var fireBaseUUID = classroom.hc.path.m[1]
      App.FirebaseAPI.setCurrentClassroomListener(fireBaseUUID)
      return 1
    }
    else {
      return 0
    }
  },
  setCurrentClassroomListener: function(currentClassroomUUID) {
    var response =  new Firebase(this.dataBaseLocation + currentClassroomUUID)
    response.on("value", function(data) {
      console.log("response recieved")
      fileContents = data.val().content

      App.Classroom.set('content', fileContents)
      App.ClassroomFolders.checkForFileAdditionsOrRemovals(fileContents)
      App.CurrentFile.parseNewContent(fileContents)
    });
  }
};

