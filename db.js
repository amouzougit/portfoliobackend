const mongoose = require('mongoose');
require('dotenv').config(); // Charge les variables d'environnement

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Récupère l'URI depuis .env
    if (!uri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Arrête le serveur en cas d'erreur
  }
};

module.exports = connectDB;
