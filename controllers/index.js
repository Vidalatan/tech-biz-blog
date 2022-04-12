const router = require('express').Router();
const withAuth = require('../utils/auth')

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard');

router.use('/', homeRoutes);
router.use('/dashboard', withAuth, dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;