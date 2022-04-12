const router = require('express').Router();
const { Post, User, Comment } = require('../../models')

router.get('/', (req, res) => {
    try {
        res.render('create-post', {req})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const getPost = await Post.findByPk(req.params.id, { include: 
            [
                {model: User, attributes: ['username']},
                {model: Comment, include: [{model: User, attributes: ['username']}]}
            ]});
        const postData = getPost.get({plain: true})
        const isAuthor = (req.session.userid === postData.user_id)
        res.render('dash-post', {req, postData, isAuthor: isAuthor})
    } catch (err) {
        res.status(404).json(err)
    }
})

module.exports = router;