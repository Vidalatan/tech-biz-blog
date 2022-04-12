const router = require('express').Router();
const { Post, User } = require('../../models')

router.get('/', async (req, res) => {
    const yourPosts = await User.findOne({ where: {username: req.session.username}, include: [Post] })
    const postsData = yourPosts.get({plain: true}).posts
    try {
        res.render('dashboard', {req, postsData})
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router;