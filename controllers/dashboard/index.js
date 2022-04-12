const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes');
const postRoutes = require('./post-routes');


router.use('/', dashboardRoutes);
router.use('/post', postRoutes);

module.exports = router;