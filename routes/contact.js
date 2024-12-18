const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Route POST pour sauvegarder les messages
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message envoyé avec succès !' });
  } catch (err) {
    console.error('Erreur lors de l\'enregistrement du message:', err.message);
    res.status(500).json({ error: 'Erreur serveur, veuillez réessayer plus tard.' });
  }
});

module.exports = router;
