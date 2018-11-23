const router = require('express').Router();
const dreamController = require('../../controllers/dreamController');

// Matches with "/api/dreams"
router
  .route('/')
  .get(dreamController.findAll)
  .post(dreamController.create);

// Matches with "/api/dreams/:id"
router
  .route('/:id')
  .get(dreamController.findById)
  .put(dreamController.update)
  .delete(dreamController.remove);

module.exports = router;
