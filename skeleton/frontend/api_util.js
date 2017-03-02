const APIUtil = {
  followUser: id => (
     $.ajax({method: "POST",
      url: `/users/${id}/follow`
    })
  ),

  unfollowUser: id => (
    $.ajax({method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "json"
    })
  ),

  searchUsers: (query, success) =>  (
    $.ajax({
      method: "GET",
      url:"/users/search",
      dataType: "json",
      data: {query},
    }).then(results => success(results))
  )

};

module.exports = APIUtil;
