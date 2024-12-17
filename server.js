const express = require('express');
const cors = require('cors'); // Pour éviter les problèmes de CORS
const bodyParser = require('express').json;
const contactRoutes = require('./routes/contact'); // Import du fichier de routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser());

// Routes
app.use('/', contactRoutes); // Assure-toi que le chemin est correct

// Vérifier que le serveur tourne
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur backend de mon portfolio !');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
