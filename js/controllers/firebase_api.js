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
      App.Classroom.set('content', data.val().content)
    });
  }
};

// App.FireBaseController = Ember.Controller.extend({
//   dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/",

// })

// App.FireBaseController = Ember.Controller.extend({
//   dataBaseLocation: "https://radiant-fire-3325.firebaseio.com/classrooms/", // need to investigate security..
//   singleRequest: function(params) {
//     new Firebase(this.dataBaseLocation)
//     .once("value", function(data) {
//       data.forEach(function(classroom) {
//         App.FireBaseController.checkRoomMatch(classroom, params)
//       })
//     })
//   },
//   checkRoomMatch: function(classroom,params) {
//     if (classroom.val().classroom_code === params) {
//       var fireBaseUID = classroom.hc.path.m[1]
//       this.initializeRoomWatch(fireBaseUID)
//     }
//   },
//   initializeRoomWatch: function(fireBaseRoom) {
//     var response =  new Firebase(this.dataBaseLocation + fireBaseRoom)
//     response.on("value", function(data) {
//       console.log("response received")
//       // debugger
//       // App.FileHolder.set('content', [])
//       if (App.FileHolder.content[0] == undefined) {
//         App.CurrentClassroom.updateAttributes(data.val())
//         App.FileHolder.buildFiles(data.val().content)
//       }
//       else {
//         App.FileHolder.content[1].file_content = 'pants'
//         App.FileHolder.notifyPropertyChange("content")
//       }
//     })
//   }
// }).create()

