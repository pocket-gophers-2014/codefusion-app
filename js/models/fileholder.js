// App.FileHolder = Ember.ArrayController.create({
//   content: [],

//   buildFiles: function(parentFolder) {
//     if (parentFolder.files !== undefined) {
//       // App.FileHolder.pushObjects(parentFolder.files)

//       for (var i = 0; i < parentFolder.files.length; i++) {
//         App.FileHolder.pushObject(App.File.create(parentFolder.files[i]) )
//       }
//     }
//     if (parentFolder.folders !== undefined) {
//       App.FileHolder.cycleFolders(parentFolder.folders)
//     }
//   },
//   cycleFolders: function(folder) {
//     for (var i = 0; i < folder.length; i ++) {
//       App.FileHolder.buildFiles(folder[i])
//     }
//   }
// })


