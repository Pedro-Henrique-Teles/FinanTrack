const express = require('express');
const router = express.Router();
const receitaController = require('../controller/receitaController');

// Criar uma nova receita
router.post('/', receitaController.createReceita);

// Listar todas as receitas
router.get('/', receitaController.getReceitas);

// Buscar uma receita por ID
router.get('/:id', receitaController.getReceitaById);

module.exports = router;
