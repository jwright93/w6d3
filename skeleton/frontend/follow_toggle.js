const APIUtil = require("./api_util.js");

class FollowToggle{
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render(){
    if(this.followState === "unfollowed"){
      this.$el.text("follow!");
    }else{
      this.$el.text("unfollow");
    }
  }

  handleClick() {
    this.$el.click((e) => {
        e.preventDefault();

        if(this.followState === "unfollowed") {
        $.ajax({method: "POST",
          url: `/users/${this.userId}/follow`,
          success: () => {
            this.followState = "followed";
            this.render();
          }});
        }
        else {
          $.ajax({method: "DELETE",
            url: `/users/${this.userId}/follow`,
            dataType: "json",
            success: () => {
              this.followState = "unfollowed";
              this.render();
          }});
        }
    });
    }
}



module.exports = FollowToggle;
