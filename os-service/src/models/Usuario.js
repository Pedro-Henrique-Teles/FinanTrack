const { DataTypes } = require('sequelize');
const sequelize = require('../bd/database');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Garante que o email será único no banco
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saldo: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0,  // Pode ser ajustado conforme a lógica do app
  },
  data_cadastro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,  // A data de cadastro é preenchida automaticamente
  },
});

module.exports = Usuario;
