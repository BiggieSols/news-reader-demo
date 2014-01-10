NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: '/feeds',

  parse: function(resp) {
    var entriesArr = resp.entries;
    resp.entries = new NewsReader.Collections.Entries(entriesArr);
    return resp;
  }
})