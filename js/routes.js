// App.Router.map(function() {
//   this.resource('classrooms', function(){
//     this.resource('classroom', {'path': ':classroom_id'}, function() {
//       this.resource('files', function() {
//         this.resource("file", { path: '/:file_id'})
//       })
//     })
//   })
// });

JSON = {folder_name: "Rails app",
  files:  [{file_name: "config.rb",file_content: "some info here"}, {file_name: "routes.rb", file_content: "resources: users"}],
  folders: [
            { folder_name: "App",
              files: [{file_name: "helper.rb",file_content: "helper info", file_path: "/rails_app/App/helper.rb"}, {file_name: "other.rb", file_content: "some data", file_path: 'rails_app/App/other.rb'}],
              folders: [
                {folder_name: "Controllers",
                  files: [ {file_name: "ApplicationController.rb",file_content: "new index info", file_path: "rails_app/Controllers/ApplicationController.rb"}, {file_name: "SessionsController.rb",file_content: "new create method", file_path: "rails_app/Controllers/SessionsController.rb"}]
                }
              ]
            },

            { folder_name: "database",
              files: [{file_name: "data.rb",file_content: "lots of data", file_path: "rails_app/database/data.rb"}],
              folders: []
            }
            ] 
}