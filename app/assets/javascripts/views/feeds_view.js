NewsReader.Views.FeedsView = Backbone.View.extend({
  template: JST['feeds/index'],

  events: {
    "click .show_feed":"showFeed"
  },

  showFeed: function (event) {
    event.preventDefault();
    var feedId = $(event.currentTarget).attr('data-id');
    NewsReader.feedRouter.navigate('feeds/' + feedId, { trigger: true});
  },

  render: function() {
    var renderedContent = this.template({ feeds: this.collection });
    this.$el.html(renderedContent);
    return this;
  }
})