App.Router.map(function() {
  this.resource('classrooms', function(){
    this.resource('classroom', {'path': ':classroom_id'}, function() {
      this.resource('files', function() {
        this.resource("file", { path: '/:file_id'})
      })
    })
  })
});