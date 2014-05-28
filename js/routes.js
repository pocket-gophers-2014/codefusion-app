App.Router.map(function() {
  this.resource('classrooms', function(){
    this.resource('classroom', {'path': ':classroom_code'}, function() {
      this.resource('files', function() {
        this.resource("file", { path: '/:file_id'})
      })
    })
  })
});