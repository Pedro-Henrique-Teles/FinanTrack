const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Criar um novo usuário
router.post('/', usuarioController.createUsuario);

// Listar todos os usuários
router.get('/', usuarioController.getUsuarios);

// Buscar um usuário por ID
router.get('/:id', usuarioController.getUsuarioById);

module.exports = router;
