const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = newUser.username
            req.session.userid = newUser.id

            res.status(200).json(newUser);
        })
    } catch (err) {
        switch (err.name) {
            case 'SequelizeUniqueConstraintError':
                res.status(406).json(err)
                break;
            default:
                res.status(500).json(err);
                break;
        }
    }
})

router.post('/login', async (req,res) => {
    try {
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
            console.log(checkUser);
            req.session.loggedIn = true;
            req.session.username = checkUser.username;
            req.session.userid = checkUser.id;
            console.log('~ file: user-routes.js ~ line 34 ~ req.session.save ~ req.session.cookie', req.session.cookie);
            res.status(200).json({ user: checkUser, message: 'You are now logged in!' })
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

router.post('/logout', (req,res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end() 
        })
    } else { res.status(404).end() }
})

module.exports = router;