const APIUtil = {
  followUser: id => {
    $.ajax({method: "POST",
      url: `/users/${id}/follow`
    });
  },

  unfollowUser: id => {
    $.ajax({method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "json"
    });
  }
};

module.exports = APIUtil;
