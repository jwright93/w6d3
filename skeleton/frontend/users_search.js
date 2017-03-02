const APIUtil = require("./api_util.js");

class UsersSearch{
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find("ul");
    this.$input.on("keyup", () => this.handleInput());
  }

  handleInput() {
    APIUtil.searchUsers(this.$input.val(), this.renderResults.bind(this));
  }


  renderResults(results){
    this.$ul.empty();
    results.forEach((user) => {
      let $li = $(`<li></li>`);
      let $a = $(`<a href="/users/${user.id}">${user.username}</a>`);
      $li.append($a);
      this.$ul.append($li);
    });

  }
}
module.exports = UsersSearch;
