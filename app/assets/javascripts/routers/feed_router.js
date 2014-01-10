NewsReader.Routers.FeedRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'feeds/:id': 'showFeed',
    'entries/:id': 'showEntry',
    'users/new': 'newUser'
  },

  index: function () {
    var feedsView = new NewsReader.Views.FeedsView({ collection: NewsReader.feeds });
    this._swapView(feedsView);
  },

  showFeed: function (id) {
    var that = this;
    var feedModel = new NewsReader.Models.Feed();
    feedModel.id = id
    feedModel.fetch({
      success: function () {
        var feedView = new NewsReader.Views.FeedView({ model: feedModel });
        that._swapView(feedView);
      }
    })
  },

  showEntry: function(id) {
    var that = this;
    var entry = new NewsReader.Models.Entry({id: id})
    entry.fetch({
      success: function() {
        var entryView = new NewsReader.Views.EntryView({
          model: entry
        });
      that._swapView(entryView);
      }
    })
  },

  newUser: function() {
    var user = new NewsReader.Models.User();
    var newUserView = new NewsReader.Views.NewUserView({ model: user });
    this._swapView(newUserView);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $('#content').html(newView.render().$el)
    var session_token = $.cookie('session_token');
    $('#session_token').html(session_token);
  }
});