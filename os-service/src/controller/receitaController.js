const Receita = require('../models/Receitas');

exports.createReceita = async (req, res) => {
  try {
    const receita = await Receita.create(req.body);
    res.status(201).json(receita);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getReceitas = async (req, res) => {
  try {
    const receitas = await Receita.findAll();
    res.json(receitas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReceitaById = async (req, res) => {
  try {
    const receita = await Receita.findByPk(req.params.id);
    if (receita) {
      res.json(receita);
    } else {
      res.status(404).json({ error: 'Receita não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
