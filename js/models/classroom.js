App.Classroom = Ember.Object.extend({
  content: null,
  classroomCode: null,
  folders: {folder_name: "Loading your directory..."},
  currentlyModifiedFile: "listening..",
}).create();