const {Comment} = require('../models');

const commentdata = [
    {
        content: 'I disagree fully with this. Sqlite is much better',
        post_id: 1,
        user_id: 3
    },
    {
        content: 'No. There is no such thing. You just need to be better',
        post_id: 1,
        user_id: 3
    }
]

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;