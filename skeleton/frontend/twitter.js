const FollowToggle = require('./follow_toggle.js');


const callback = () => {
  let array = [];
  $(".follow-toggle").each((i, el) => {
    array.push(new FollowToggle($(el)));
    console.log(array[i]);
  });
};
$(callback);
