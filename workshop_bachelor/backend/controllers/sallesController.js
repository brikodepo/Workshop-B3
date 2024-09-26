const db = require('../config/db');

// Créer une salle
exports.createSalle = (req, res) => {
    const { nom_salle, taille_salle } = req.body;

    const query = 'INSERT INTO salles (nom_salle, taille_salle) VALUES (?, ?)';
    db.query(query, [nom_salle, taille_salle], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Salle créée avec succès', id_salle: result.insertId });
    });

};

// Récupérer toutes les salles
exports.getAllSalles = (req, res) => {
    const query = 'SELECT * FROM salles';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(200).json(results);
    });
};

// Sélectionner une salle par ID
exports.getSalleById = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM salles WHERE id_salle = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Salle non trouvée' });
        }
        res.status(200).json(result[0]);
    });
};

// Mettre à jour une salle
exports.updateSalle = (req, res) => {
    const { id } = req.params;
    const { nom_salle, taille_salle } = req.body;

    const query = 'UPDATE salles SET nom_salle = ?, taille_salle = ? WHERE id_salle = ?';
    db.query(query, [nom_salle, taille_salle, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Salle non trouvée' });
        }
        res.status(200).json({ message: 'Salle mise à jour avec succès' });
    });
};


// Supprimer une salle
exports.deleteSalle = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM salles WHERE id_salle = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Salle non trouvée' });
        }
        res.status(200).json({ message: 'Salle supprimée avec succès' });
    });
};