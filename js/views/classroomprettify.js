Ember.View.reopen({
  didInsertElement: function() {
    Ember.run.schedule('afterRender', this, this.udpateCodePrettify);
  },

  udpateCodePrettify: function() {
    this.$('pre').each(function() { prettyPrint() });
  }
});
