const router = require('express').Router();
const debtController = require('../../controllers/debtController');

// Matches with "/api/debt"
router
  .route('/')
  .get(debtController.findAll)
  .post(debtController.create);

// Matches with "/api/debt/:id"
router
  .route('/:id')
  .get(debtController.findById)
  .put(debtController.update)
  .delete(debtController.remove);

module.exports = router;
