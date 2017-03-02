const APIUtil = require("./api_util.js");

class FollowToggle{
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = (this.$el.data("initial-follow-state"));
    this.render();
    this.handleClick();
  }

  render(){
    if(this.followState === "unfollowed"){
      this.$el.text("follow!");
    }else{
      this.$el.text("unfollow");
    }
    this.$el.prop("disabled", false);
  }

  handleClick() {
    this.$el.click((e) => {
        e.preventDefault();
        this.$el.prop("disabled", true);
        if(this.followState === "unfollowed") {
          APIUtil.followUser(this.userId)
            .then(() => {
              this.followState = "followed";
              this.render();
            });
        }
        else {
          APIUtil.unfollowUser(this.userId)
            .then(() => {
              this.followState ="unfollowed";
              this.render();
            });
        }
    });
    }
}



module.exports = FollowToggle;
