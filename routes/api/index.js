const router = require('express').Router();
const dreamRoutes = require('./dream');

// Dream routes
router.use('/dream', dreamRoutes);

module.exports = router;
