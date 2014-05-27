App.CurrentClassroom = Ember.Object.extend({
  classroom_code: "",
  content: "",
  currentCode: "", // option
  currentNote: "", // option
  updateAttributes: function(params) {
    this.set('classroom_code', params.classroom_code)
    this.set('content', params.content)
  }
}).create()
