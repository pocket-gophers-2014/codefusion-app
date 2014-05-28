App.Classroom = Ember.Object.extend({
  content: null,
  classroomCode: null,
  asZipDirectory: function(){
    var files = this.content.files
    var folders = this.content.folders
    var folderName = this.content.folder_name

    var zip = new JSZip();
    zip = zip.folder(folderName)
    zip = this.buildFiles(zip, files)
    zip = this.buildFolders(zip, folders)
    return zip
  },
  buildFolders: function(zip, folders){
    if(folders){
      folders.forEach(function(subFolder){
        zip = zip.folder(subFolder.folder_name)
        this.buildFiles(zip, subFolder.files)
        if(subFolder.folders !== undefined){ //if it has subfolders, build them
          this.buildFolders(zip, subFolder.folders)
        }
      }, this)
    }
    return zip
  },

  buildFiles: function(zip, files){
    if(files){
      files.forEach(function(file){
        zip = zip.file(file.file_name, file.file_content)
      }, this)
    }
    return zip
  }
}).create();