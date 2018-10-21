const express = require('express');
const router = express.Router();

// import vender controller
const venderController = require('../controllers/venders-controller');

// Get all venders
router.get('/', venderController.allVenders);

// Get a vender by id
router.get('/:id', venderController.getById);

// Create a vender by id
router.post('/', venderController.create);

// Update a vender by id
router.put('/:id', venderController.update);

// Deletea vender by id
router.delete('/:id', venderController.destroy);

module.exports = router;
