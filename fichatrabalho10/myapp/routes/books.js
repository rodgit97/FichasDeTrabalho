const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.index);
router.post('/', bookController.store);
// router.put('/:id', bookController.update);
// router.delete('/:id', bookController.destroy);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const bookController = require('../controllers/bookController');

// router.get('/', bookController.index);
// router.post('/', bookController.store);
// router.put('/:id', bookController.update);
// router.delete('/:id', bookController.destroy);

// module.exports = router;