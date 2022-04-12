const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render('dashboard')
        } else {
            res.status(403).redirect('./login?=false')
        }
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router;