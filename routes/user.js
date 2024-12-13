const express = require('express');
const router = express.Router();

// Ruta solo para usuarios regulares
router.get('/', (req, res) => {
  res.send('Bienvenido, usuario');
});

module.exports = router;
