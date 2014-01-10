NewsReader.Views.EntryView = Backbone.View.extend({
  events: {
    'click .back': 'back'
  },

  template: JST['entries/show'],

  render: function() {
    var renderedContent = this.template({entry: this.model});
    this.$el.html(renderedContent);
    return this;
  }
})