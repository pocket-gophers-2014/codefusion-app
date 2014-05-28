App.IndexController = Ember.Controller.extend({
  actions: {
    redirectToClassroom: function(params) {
      this.transitionToRoute('classroom', params )
    }
  }
});