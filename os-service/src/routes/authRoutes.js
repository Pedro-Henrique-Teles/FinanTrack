const express = require('express');
const router = express.Router();
const loginController = require('../controller/authController'); // Certifique-se do caminho correto

// Rota de login
router.post('/login', loginController.login);

module.exports = router;
