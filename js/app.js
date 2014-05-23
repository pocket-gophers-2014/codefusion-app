App = Ember.Application.create();

App.Router.map(function() {
  this.resource('classrooms');
  this.resource('classroom', { path: '/classrooms/:classroom_id' });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    return data;
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    // var shirt = data.findBy( 'classroom_id', params.classroom_id );

    var things = fb.on("value", function(data) {
      name = data.val() ? data.val().name : "";
      console.log("Name is: " + name)
      return name
    })
    console.log(things)
    return { things: things }
  }
});

// var data = [{classroom_id: "1", name: "fun"}, {classroom_id: "2", name: "less fun"}]
var fb = new Firebase("https://radiant-fire-3325.firebaseio.com/");
// fb.set({ classroom_id: "2", name: "pants" })

// App.ApplicationAdapter = DS.FirebaseAdapter.extend({
//   firebase: new Firebase("https://radiant-fire-3325.firebaseio.com/")
// });
// App.ApplicationSerializer = DS.FirebaseSerializer.extend();
