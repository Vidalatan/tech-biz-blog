const router = require('express').Router();
const { User, Post, Comment } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const allComments = await Comment.findAll({ include: [{model: User, attributes: ['username']}, Post] });
        res.status(200).json(allComments);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const singComment = await Comment.findByPk(req.params.id, { include: [{model: User, attributes: ['username']}, Post] });
        res.status(200).json(singComment);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;