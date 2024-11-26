const { DataTypes } = require('sequelize');
const sequelize = require('../bd/database');

const Receita = sequelize.define('Receita', {
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
  recebida: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Se a receita foi recebida ou não
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

module.exports = Receita;
