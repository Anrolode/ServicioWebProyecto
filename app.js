const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const clientRoutes = require('./routes/client');
const authMiddleware = require('./middlewares/authMiddleware');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json()); // Parsear las solicitudes con cuerpo JSON

// Rutas para las distintas secciones de la API
app.use('/auth', authRoutes);  // Ruta para autenticación
app.use('/admin', authMiddleware, adminRoutes); // Ruta para admin, con middleware de autenticación
app.use('/user', authMiddleware, userRoutes);   // Ruta para usuarios, con middleware de autenticación
app.use('/client', authMiddleware, clientRoutes); // Ruta para clientes, con middleware de autenticación

// Conexión a MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error conectando a MongoDB', err));

// Definir el puerto en el que corre el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
