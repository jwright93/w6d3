const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');


const callback = () => {
  $(".follow-toggle").each((i, el) => {
    new FollowToggle($(el));
  });

  $(".users-search").each((i,el) => {
    new UsersSearch($(el));
  });
  
};
$(callback);
