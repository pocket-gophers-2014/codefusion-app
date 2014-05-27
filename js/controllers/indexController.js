App.IndexController = Ember.Controller.extend({
  actions: {
    redirectToClassroom: function(params) {
      console.log(params)
      this.transitionTo('classroom', params + '/files')
    }
  }
})
