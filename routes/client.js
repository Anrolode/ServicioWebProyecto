const express = require('express');
const router = express.Router();

// Ruta solo para clientes
router.get('/', (req, res) => {
  res.send('Bienvenido, cliente');
});

module.exports = router;
