const Despesa = require('../models/Despesa');

exports.createDespesa = async (req, res) => {
  try {
    const despesa = await Despesa.create(req.body);
    res.status(201).json(despesa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDespesas = async (req, res) => {
  try {
    const despesas = await Despesa.findAll();
    res.json(despesas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDespesaById = async (req, res) => {
  try {
    const despesa = await Despesa.findByPk(req.params.id);
    if (despesa) {
      res.json(despesa);
    } else {
      res.status(404).json({ error: 'Despesa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
