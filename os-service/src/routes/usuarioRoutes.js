const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');  // Verifique a importação

// Rota para criar um novo usuário (Cadastro)
router.post('/', usuarioController.register);  // Verifique se a função 'register' está corretamente exportada no controller

// Rota para buscar todos os usuários
router.get('/', usuarioController.getUsuarios);

module.exports = router;
