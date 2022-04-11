const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        res.status(404).send('Page not found')
    }
})

module.exports = router;