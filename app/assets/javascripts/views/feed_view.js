NewsReader.Views.FeedView = Backbone.View.extend({
  events: {
    'click .refresh': 'refresh'
  },

  template: JST["feeds/show"],

  render: function () {
    console.log(this.model)
    var renderedContent = this.template({ feed: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  refresh: function(event) {
    event.preventDefault();
    var that = this;
    this.model.fetch({
      success: function() {
        $('#context').html(that.render().$el);
      }
    })
  }
})