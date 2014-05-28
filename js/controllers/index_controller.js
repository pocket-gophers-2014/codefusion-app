App.IndexController = Ember.Controller.extend({
  actions: {
    redirectToClassroom: function(params) {
      this.transitionTo('classroom', params + '/files')
    }
  }
});