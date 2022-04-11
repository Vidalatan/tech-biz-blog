const { Post } = require('../models');

const postdata = [
  {
    content: 'I think that MySQL is the greatest ever! If you disagree, comment below and let me know what you think!',
    user_id: 1
  },
  {
    content: 'I wish there was an easy way to create a form that allows the user to submit their information, rather than have to program one by hand. Is there anything like that out there?',
    date_created: '2017-11-20',
    user_id: 2
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;