App.FirebaseAPI = {
  dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/",

  initClassroomChangeListener: function(classroom_code) {
    classroom_codes = []
    new Firebase(this.dataBaseLocation)
    .once("value", function(data) {
      forEachLoop( data, App.FirebaseAPI.collectClassroomCodes(classroom) )
    }
      // App.FirebaseAPI.checkRoomMatch(classroom, classroom_code)
    // console.log(classroom_codes.length)
  },

  forEachLoop: function(data, funct) {
    data.forEach(function(classroom) {
      funct
  },

  collectClassroomCodes: function(classroom) {
    classroom_codes.push(classroom)
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
      App.CurrentFile.parseNewContent(data.val().content)
    });
  }
};
