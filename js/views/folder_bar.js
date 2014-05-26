JSON = [{folder_name: "Rails app",
files:  [{file_name: "config.rb",file_content: "some info here"}, {file_name: "routes.rb", file_content: "resources: users"}],
children: [
            { folder_name: "App",
              files: [{file_name: "helper.rb",file_content: "helper info"}, {file_name: "other.rb", file_content: "some data"}],
              children: [
                {folder_name: "Controllers",
                  files: [{file_name: "ApplicationController.rb",file_content: "new index info"},{file_name: "SessionsController.rb",file_content: "new create method"}]}
              ]  },

            { folder_name: "database",
              files: [{file_name: "data.rb",file_content: "lots of data"}],
              children: [] }
          ]
}


]