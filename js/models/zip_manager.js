//Replace filesaver.js and jszip with minified versions or with CDN references
App.ZipManager = Ember.Object.extend({
  getZip: function(rootDirectory){
    return this.makeZip(rootDirectory)
  },
  makeZip: function(rootDirectory){
    var downloadable = this.buildFileStructure(rootDirectory).generate({type:'blob'}, this.nameTheZipFile(rootDirectory))
    return downloadable
  },
  buildFileStructure: function(rootDirectory){
    var zip = new JSZip().folder(rootDirectory.folder_name)
    this.addCumulativeNotesToZip(zip)
    this.addFilesToZip(zip, rootDirectory.files)
    this.addFoldersToZip(zip, rootDirectory.folders)
    return zip
  },
  addFoldersToZip: function(zip, folders){
    if(folders !== undefined){
      folders.forEach(function(subFolder){
        var zipSubFolder = this.makeZipSubFolder(zip, subFolder)
        this.addFilesToZip(zipSubFolder, subFolder.files)

        if(subFolder.folders !== undefined){
          this.addFoldersToZip(zipSubFolder, subFolder.folders)
        }
      }, this)
    }
    return zip
  },
  addFilesToZip: function(zip, files){
    if(files){
      files.forEach(function(file){
        zip = zip.file(this.truncatePathName(file.file_name), file.file_content)
      }, this)
    }
    return zip
  },
  makeZipSubFolder: function(zip, subFolder){
    return zip.folder(this.truncatePathName(subFolder.folder_name))
  },
  addCumulativeNotesToZip: function(zip){
    zip.file(this.nameTheNotesFile(), App.NoteHolder.generateCumulativeNotes())
    return zip
  },
  truncatePathName: function(pathName){
    return pathName.slice(pathName.lastIndexOf('/') + 1, 500)
  },
  nameTheZipFile: function(rootDirectory){
    return (App.Classroom.classroomCode + "_" + rootDirectory.folder_name)
  },
  nameTheNotesFile: function(){
    App.Classroom.classroomCode + "_notes.txt"
  }
}).create()