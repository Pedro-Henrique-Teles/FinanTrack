const { DataTypes } = require('sequelize');
const sequelize = require('../bd/database');

const Despesa = sequelize.define('Despesa', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  pago: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Se a despesa foi paga ou não
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuarios', // Relacionamento com a tabela de Usuários
      key: 'id',
    },
  },
});

module.exports = Despesa;
