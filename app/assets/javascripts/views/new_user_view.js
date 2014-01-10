NewsReader.Views.NewUserView = Backbone.View.extend({

  events: {
    'submit #new_user_form': "createUser"
  },

  template: JST["users/new"],

  render: function (){
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  createUser: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var user = new NewsReader.Models.User(formData);
    // console.log(user);
    user.save({}, {
      success: function(resp) {
        $.cookie("session_token", resp.get('session_token'));
        console.log(resp)
        NewsReader.feedRouter.navigate("", {trigger: true})
      },

      error: function(resp) {
        console.log("failed")
      }
    });
  }
})