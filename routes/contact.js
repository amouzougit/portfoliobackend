const express = require('express');
const router = express.Router();
const Message = require('../models/Message'); // Assure-toi que le modèle est bien importé
const connectDB = require('../db'); // Assure-toi que MongoDB est bien connecté

// Connecter à MongoDB
connectDB();

// Route POST pour sauvegarder les messages
router.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error saving message:', err.message);
    res.status(500).json({ error: 'Failed to save message, please try again.' });
  }
});

module.exports = router;
