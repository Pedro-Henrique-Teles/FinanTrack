const express = require('express');
const usuarioController = require('../controller/usuarioController');

const router = express.Router();

router.post('/', usuarioController.createUsuario);       // Criar um usuário
router.get('/', usuarioController.getUsuarios);          // Buscar todos os usuários
router.get('/:id', usuarioController.getUsuarioById);    // Buscar um usuário por ID
router.put('/:id', usuarioController.updateUsuario);     // Atualizar um usuário
router.delete('/:id', usuarioController.deleteUsuario);  // Deletar um usuário

module.exports = router;
