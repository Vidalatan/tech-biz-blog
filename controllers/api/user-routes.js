const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(newUser);
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

router.post('/login', async (req,res) => {
    try {
        console.log('ALERT USER ATTEMPTING TO LOG IN');
        const checkUser = await User.findOne({ where: { username: req.body.username } })
        if (!checkUser) { 
            res.status(404).json({ message: 'Incorrect username or password. Please try again...'}) 
            return ;
        }

        const validPassword = await checkUser.checkPassword(req.body.password);
        console.log(validPassword);
        if (!validPassword) {
            res.status(404).json({ message: 'Incorrect username or password. Please try again...'})
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = checkUser.username
            console.log('~ file: user-routes.js ~ line 34 ~ req.session.save ~ req.session.cookie', req.session.cookie);
            res.status(200).json({ user: checkUser, message: 'You are now logged in!' })
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

router.post('/logout', (req,res) => {
    req.session.loggedIn && req.session.destroy(() => { res.status(204).end() });
    req.session.loggedIn || res.status(404).end();
})

module.exports = router;