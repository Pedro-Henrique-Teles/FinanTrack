const express = require('express');
const router = express.Router();
const despesaController = require('../controller/despesaController');

// Criar uma nova despesa
router.post('/', despesaController.createDespesa);

// Listar todas as despesas
router.get('/', despesaController.getDespesas);

// Buscar uma despesa por ID
router.get('/:id', despesaController.getDespesaById);

module.exports = router;
