App.Router.map(function() {
  this.resource('classrooms', function(){
    this.resource('classroom', {'path': ':classroom_id'})
  })
});
