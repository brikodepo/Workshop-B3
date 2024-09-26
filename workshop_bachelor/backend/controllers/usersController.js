const db = require('../config/db');

// Créer un utilisateur
exports.createUser = (req, res) => {
    const { nom, prenom, id_roles_role_rank, pwd } = req.body;

    const query = 'INSERT INTO users (nom, prenom, id_roles_role_rank, pwd) VALUES (?, ?, ?, ?)';
    db.query(query, [nom, prenom, id_roles_role_rank, pwd], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Utilisateur créé avec succès', id_user: result.insertId });
    });
};

// Lire tous les utilisateurs
exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(200).json(results);
    });
};

// Sélectionner un utilisateur par ID
exports.getUserById = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM users WHERE id_user = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json(result[0]);
    });
};

// Mettre à jour un utilisateur
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { nom, prenom, id_roles_role_rank, pwd } = req.body;

    const query = 'UPDATE users SET nom = ?, prenom = ?, id_roles_role_rank = ?, pwd = ? WHERE id_user = ?';
    db.query(query, [nom, prenom, id_roles_role_rank, pwd, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
    });
};

// Supprimer un utilisateur
exports.deleteUser = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM users WHERE id_user = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    });
};