const express = require('express');
const cors = require('cors'); // Pour éviter les problèmes de CORS
const bodyParser = require('express').json;
const contactRoutes = require('./routes/contact'); // Import du fichier de routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: 'https://portfolio-zeta-eight-12.vercel.app', // URL de votre frontend déployé
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser());

// Routes
app.use('/api', contactRoutes); // Change le chemin pour être plus spécifique

// Vérifier que le serveur tourne
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur backend de mon portfolio !');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
