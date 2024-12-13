const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // Obtener el header 'Authorization'
  const token = req.header('Authorization');
  
  // Verificar si el token existe
  if (!token) return res.status(401).json({ message: 'Acceso no autorizado' });

  // Verificar si el token empieza con 'Bearer '
  if (!token.startsWith('Bearer ')) {
    return res.status(400).json({ message: 'Token mal formado' });
  }

  try {
    // Extraer el token y verificarlo
    const decoded = jwt.verify(token.slice(7), process.env.JWT_SECRET); // Elimina 'Bearer '
    req.user = decoded; // Agregar los datos decodificados al request
    next(); // Llamar a la siguiente función o ruta
  } catch (error) {
    return res.status(400).json({ message: 'Token no válido' });
  }
};
