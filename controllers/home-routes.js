const router = require('express').Router();
const { Post, User} = require('../models')

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({ include: [{model: User, attributes: ['username'] }] });
        const postsData = allPosts.map((post) => post.get({ plain: true }));
        console.log(req.session);
        res.render('home', {req, postsData})
    } catch (err) {
        console.error(err)
        res.status(404).send('Page not found')
    }
})

router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/')
            return
        } else {
            res.render('login')
        }
    } catch (err) {
        
    }
})

module.exports = router;