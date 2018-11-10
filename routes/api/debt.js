const router = require('express').Router();
const debtController = require('../../controllers/debtController');

// Matches with "/api/debt"
router
  .route('/')
  .get(debtController.findAll)
  .post(debtController.create);

module.exports = router;
