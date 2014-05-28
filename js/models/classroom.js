App.Classroom = Ember.Object.extend({
  content: null,
  classroomCode: null,
  folders: {folder_name: "Loading your directory..."},
  currentlyModifiedFile: "listening..",




  asZipDirectory: function(){
    var files = this.content.files
    var folders = this.content.folders
    var folderName = this.content.folder_name

    var zip = new JSZip();

    zip = zip.folder(folderName)
    this.cumulativeNotes(zip)
    this.buildFiles(zip, files)
    this.buildFolders(zip, folders)
    return zip
  },
  cumulativeNotes: function(zip){
    var cumulativeNoteString = ""
    var notes = App.NoteHolder.notes
    for (var note in notes){
      cumulativeNoteString += ("--------" + note + "\n" + notes[note] + '\n\n')
    }
    zip.file(App.Classroom.classroomCode + "_notes.txt", cumulativeNoteString)
    return zip
  },
  buildFolders: function(zip, folders){
    if(folders){
      folders.forEach(function(subFolder){
        var zipSubFolder = zip.folder(this.truncateFolderName(subFolder.folder_name))
        this.buildFiles(zipSubFolder, subFolder.files)
        if(subFolder.folders !== undefined){ //if it has subfolders, build them
          this.buildFolders(zipSubFolder, subFolder.folders)
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
  },
  truncateFolderName: function(folderName){
    return folderName.slice(folderName.lastIndexOf('/') + 1, 500)
  }
}).create();