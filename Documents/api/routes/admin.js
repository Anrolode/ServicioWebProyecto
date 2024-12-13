const express = require('express');
const router = express.Router();

// Ruta solo para administradores
router.get('/', (req, res) => {
  res.send('Bienvenido, administrador');
});

module.exports = router;
