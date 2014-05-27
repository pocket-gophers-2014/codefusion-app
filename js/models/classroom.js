App.CurrentClassroom = Ember.Object.extend({
  classroom_code: "",
  data: {},
  updateAttributes: function(params) {
    this.set("classroom_code", (params.classroom_code || ""))
    this.set("data", (params.data || ""))

    var folder = App.Directory.create(params)
    folder.setFolders()

    console.log(folder)

  }
}).create()



// App.ClassroomHolder = Ember.ArrayController.create({
//   content: [],
//   updateContent: function(newRoom) {
//     // var classroom_code = (newRoom.classroom_code || "")
//     // var file_content =  (newRoom.file_content || "")
//     // var file_name = (newRoom.file_name || "")
//     var classroom = {classroom_code: classroom_code, file_content: file_content, file_name: file_name}
//     this.pushObject( classroom )
//   }
// })


