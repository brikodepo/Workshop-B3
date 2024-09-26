const db = require('../config/db');

//Créer une taille de salle
exports.createTaille = (req, res) => {
    const { taille } = req.body;

    const query = 'INSERT INTO tailles (taille) VALUES (?)';
    db.query(query, [taille], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Taille créée avec succès', id_taille: result.insertId });
    });
};

//Récupérer toutes les tailles
exports.getAllTailles = (req, res) => {
    const query = 'SELECT * FROM taille';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(200).json(results);
    });
};

//Sélectionner une taille par ID
exports.getTailleById = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM tailles WHERE id_taille = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Taille non trouvée' });
        }
        res.status(200).json(result[0]);
    });
};

//Mettre à jour une taille
exports.updateTaille = (req, res) => {
    const { id } = req.params;
    const { taille } = req.body;

    const query = 'UPDATE tailles SET taille = ? WHERE id_taille = ?';
    db.query(query, [taille, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Taille non trouvée' });
        }
        res.status(200).json({ message: 'Taille mise à jour avec succès' });
    });
};

//Supprimer une taille
exports.deleteTaille = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM tailles WHERE id_taille = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Taille non trouvée' });
        }
        res.status(200).json({ message: 'Taille supprimée avec succès' });
    });
};
