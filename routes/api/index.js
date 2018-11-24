const router = require('express').Router();
const debtRoutes = require('./debt');

// Debt routes
router.use('/debt', debtRoutes);

module.exports = router;
