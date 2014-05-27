// App.FilesRoute = Ember.Route.extend({
//   model: function() {
//     return App.CurrentClassroom
//   }
// })

// // App.FileRoute = Ember.Route.extend({
// //   model: function(params) {
// //     // debugger
// //     // return App.FileHolder.findBy('file_name', params.file_id)
// //     debugger
// //     return App.FileHolder[1]
// //   },

// //   afterModel: function() {
// //     console.log("updated")
// //     App.MasterViewController.refreshView()
// //   },

// //   modelUpdate: function(a) {
// //     console.log(a)
// //     console.log("here")
// //     if (a.context) {
// //       var file_name = a.context.file_name
// //       this.currentModel = App.FileHolder.findBy('file_name', file_name)
// //       // this.currentModel = holder
// //       // the right view.rerender()
// //       // debugger
// //     }
// //   }.observes('App.FileHolder.content')
// // })

// App.FileRoute = Ember.Route.extend({
//   model: function(params) {
//     return this.store.find("file", params.file_id)
//   }
// })