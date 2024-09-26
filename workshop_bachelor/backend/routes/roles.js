const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');

// Routes CRUD pour les rôles
router.post('/roles', rolesController.createRole);
router.get('/roles', rolesController.getAllRoles);
router.get('/roles/:id', rolesController.getRoleById);
router.put('/roles/:id', rolesController.updateRole);
router.delete('/roles/:id', rolesController.deleteRole);

module.exports = router;