App.Directory = Ember.Object.extend({
  folder_name: "",
  files: [],
  folders: [],
  setFolders: function(params) {
    // console.log(this.set('folders', App.Directory.create(params)))
    console.log(this.folders)
    for (i in this.folders) {
      console.log(this.folders[i])
    }


    // files = App.File.create([{file_name: "test"},{file_name: "other"}])
  }
})

App.File = Ember.Object.extend({
  file_name: "",
  file_id: "",
  content: "",
  notes: ""
})