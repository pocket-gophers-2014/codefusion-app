App.ClassroomHolder = Ember.ArrayController.create({
  content: [],
  updateContent: function(newRoom) {
    var classroom_code = (newRoom.classroom_code || "")
    var file_content =  (newRoom.file_content || "")
    var file_name = (newRoom.file_name || "")
    var classroom = {classroom_code: classroom_code, file_content: file_content, file_name: file_name}
    this.pushObject( classroom )
  }
})


