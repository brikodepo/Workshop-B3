const express = require('express');
const router = express.Router();
const sallesController = require('../controllers/sallesController');

// Routes CRUD pour les salles
router.post('/salles', sallesController.createSalle);
router.get('/salles', sallesController.getAllSalles);
router.get('/salles/:id', sallesController.getSalleById);
router.put('/salles/:id', sallesController.updateSalle);
router.delete('/salles/:id', sallesController.deleteSalle);

module.exports = router;