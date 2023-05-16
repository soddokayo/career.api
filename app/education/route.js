const router = require('express').Router();
const controller = require('./control.js');

// Create education record
router.post('/', controller.create);

// Retrieve all education records
router.get('/', controller.findAll);

// Retrieve education record by id
router.get('/:id', controller.findOne);

// Update education record by id
router.put('/:id', controller.update);

// Delete education record by id
router.delete('/:id', controller.delete);

module.exports = router;