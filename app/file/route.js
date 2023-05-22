const router = require('express').Router();
const controller = require('./control.js');

// Upload file
router.get('/upload', controller.upload);

// Retrieve all file records
// router.get('/', controller.findAll);

// Retrieve file record by id
// router.get('/:id', controller.findOne);

// Update file record by id
// router.put('/:id', controller.update);

// Delete file record by id
// router.delete('/:id', controller.delete);

module.exports = router;