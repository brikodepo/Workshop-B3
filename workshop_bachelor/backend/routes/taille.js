const express = require('express');
const router = express.Router();
const tailleController = require('../controllers/tailleController');

// Routes CRUD pour les tailles
router.post('/tailles', tailleController.createTaille);
router.get('/tailles', tailleController.getAllTailles);
router.get('/tailles/:id', tailleController.getTailleById);
router.put('/tailles/:id', tailleController.updateTaille);
router.delete('/tailles/:id', tailleController.deleteTaille);

module.exports = router;