App = Ember.Application.create({ });

App.IndexRoute = Ember.Route.extend({
  model: function() {
    newRequest = FireBaseController.multiRequest()
    return App.ClassroomHolder
  }
});

App.Router.map(function() {
  this.resource('classrooms', function(){
    this.resource('classroom', {'path': '/:classroom_id'})
  })
});

App.ClassroomsRoute = Ember.Route.extend({
  model: function() {
    return App.ClassroomHolder;
  }
});

App.ClassroomRoute = Ember.Route.extend({
  model: function(params) {
    newRequest = FireBaseController.singleRequest(params["classroom_id"])
    return App.ClassroomHolder
  }
});

Ember.View.reopen({
  didInsertElement: function() {
    // this._super()
    Ember.run.schedule('afterRender', this, this.udpateCodePrettify);
  },

  udpateCodePrettify: function() {
    console.log("pretty!")
    this.$('pre').each(function() { prettyPrint() });
  }
});

App.ClassroomHolder = Ember.ArrayController.create({
  content: [],
  updateContent: function(data) {
    this.set("content", [])
    newRoom = App.ClassRoom.create(data.val())
    this.pushObject(newRoom)
  }
})

App.ClassRoom = Ember.Object.extend({
  // classroom_id: "",
  // content: ""i
})

App.ClassroomController = Ember.Controller.extend({
  actions: {
    updateData: function() {
      console.log("updating data")
    }
  }
})
