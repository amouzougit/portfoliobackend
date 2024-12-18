require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('express').json;
const contactRoutes = require('./routes/contact');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
connectDB();

// Middleware CORS
app.use(cors({
  origin: process.env.FRONTEND_URL, // Autoriser l'accès depuis le frontend
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser());

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur backend de mon portfolio !');
});

// Routes API
app.use('/api', contactRoutes);

// Middleware de gestion d'erreurs
app.use((err, req, res, next) => {
  console.error('Erreur interne :', err.message);
  res.status(500).json({ error: 'Une erreur interne est survenue.' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
