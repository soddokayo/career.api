const router = require('express').Router();
const controller = require('./control.js');

// Create memo record
router.post('/', controller.create);

// Retrieve all memo records
router.get('/', controller.findAll);

// Retrieve memo record by id
router.get('/:id', controller.findOne);

// Update memo record by id
router.put('/:id', controller.update);

// Delete memo record by id
router.delete('/:id', controller.delete);

module.exports = router;