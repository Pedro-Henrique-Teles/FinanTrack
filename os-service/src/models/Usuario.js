const { DataTypes } = require('sequelize');  // Certifique-se de importar o DataTypes corretamente
const bcrypt = require('bcryptjs');
const sequelize = require('../bd/database');  // Certifique-se de que o caminho do banco de dados está correto

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Garantir que o e-mail seja único
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saldo: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0,
  },
  data_cadastro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,  // Definir o valor default como a data atual
  },
});

// Hook para criptografar a senha antes de salvar no banco
Usuario.beforeCreate(async (usuario) => {
  if (usuario.senha) {
    usuario.senha = await bcrypt.hash(usuario.senha, 10);  // 10 é o número de saltos do bcrypt
  }
});

module.exports = Usuario;
