const db = require('../config/db');

// Créer un événement
exports.createEvent = (req, res) => {
    const { id_event, titre, nom_event, img, synopsis } = req.body;

    const query = 'INSERT INTO event (id_event, titre, nom_event, img, synopsis) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [id_event, titre, nom_event, img, synopsis], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Evénement créé avec succès', id_event: result.insertId });
    });
};

// Lire tous les événements
exports.getAllEvents = (req, res) => {
    const query = 'SELECT * FROM event';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(200).json(results);
    });
}

// Sélectionner un événement par ID
exports.getEventById = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM event WHERE id_event = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Evénement non trouvé' });
        }
        res.status(200).json(result[0]);
    });
};

// Mettre à jour un événement
exports.updateEvent = (req, res) => {
    const { id } = req.params;
    const { titre, nom_event, img, synopsis } = req.body;

    const query = 'UPDATE event SET titre = ?, nom_event = ?, img = ?, synopsis = ? WHERE id_event = ?';
    db.query(query, [titre, nom_event, img, synopsis, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Evénement non trouvé' });
        }
        res.status(200).json({ message: 'Evénement mis à jour avec succès' });
    });
};

// Supprimer un événement
exports.deleteEvent = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM event WHERE id_event = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Evénement non trouvé' });
        }
        res.status(200).json({ message: 'Evénement supprimé avec succès' });
    });
}
