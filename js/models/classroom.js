App.CurrentClassroom = Ember.Object.extend({
  classroom_code: "",
  file_content: "",
  file_name: "",
  updateAttributes: function(params) {
    this.set("classroom_code", (params.classroom_code || ""))
    this.set("file_content", (params.file_content || ""))
    this.set("file_name", (params.file_name || ""))
    App.MasterViewController.refreshView()

  }
}).create()


