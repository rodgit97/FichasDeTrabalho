const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.get('/', loanController.index);
router.post('/', loanController.store);
router.put('/:id', loanController.update);
router.delete('/:id', loanController.destroy);

module.exports = router;