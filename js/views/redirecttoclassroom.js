App.RedirectToClassroom = Ember.View.extend({
  click: function(event) {
    event.preventDefault()
    classroom_code = event.currentTarget.form[0].value
    window.location.replace('#/classrooms/' + classroom_code)
  }
})