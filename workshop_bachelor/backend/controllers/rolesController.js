const db = require('../config/db');

// Créer un rôle
exports.createRole = (req, res) => {
    const { role_rank } = req.body;

    const query = 'INSERT INTO roles (role_rank) VALUES (?)';
    db.query(query, [role_rank], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Rôle créé avec succès', id_roles: result.insertId });
    });
};

// Récupérer tous les rôles
exports.getAllRoles = (req, res) => {
    const query = 'SELECT * FROM roles';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(200).json(results);
    });
};

// Lire un rôle par ID
exports.getRoleById = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM roles WHERE id_roles = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Rôle non trouvé' });
        }
        res.status(200).json(result[0]);
    });
};

// Mettre à jour un rôle
exports.updateRole = (req, res) => {
    const { id } = req.params;
    const { role_rank } = req.body;

    const query = 'UPDATE roles SET role_rank = ? WHERE id_roles = ?';
    db.query(query, [role_rank, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Rôle non trouvé' });
        }
        res.status(200).json({ message: 'Rôle mis à jour avec succès' });
    });
};

// Supprimer un rôle
exports.deleteRole = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM roles WHERE id_roles = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Rôle non trouvé' });
        }
        res.status(200).json({ message: 'Rôle supprimé avec succès' });
    });
};