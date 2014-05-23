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
    return data.findBy( 'classroom_id', params.classroom_id );
  }
});

var data = [{classroom_id: "1", name: "fun"}, {classroom_id: "2", name: "less fun"}]
