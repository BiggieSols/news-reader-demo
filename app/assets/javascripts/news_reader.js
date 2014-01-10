window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    NewsReader.feeds.fetch({
      success: function() {
        NewsReader.feedRouter = new NewsReader.Routers.FeedRouter();
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
