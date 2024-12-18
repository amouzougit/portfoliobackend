const express = require('express');
const cors = require('cors');
const bodyParser = require('express').json;
const contactRoutes = require('./routes/contact');
const connectDB = require('./db'); // Connexion MongoDB
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
connectDB();

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL, // Variable d'environnement pour l'URL frontend
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser());

// Routes
app.use('/api', contactRoutes);

// Route principale pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur backend de mon portfolio !');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
