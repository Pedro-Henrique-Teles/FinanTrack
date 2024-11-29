const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs'); // Para hash da senha

// Função para registrar um novo usuário
exports.register = async (req, res) => {
  const { email, senha, nome } = req.body; // Receber dados do corpo da requisição

  try {
    // Verificar se já existe um usuário com o mesmo email
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Email já cadastrado!' });
    }

    // Criptografar a senha antes de salvar
    const senhaHash = await bcrypt.hash(senha, 10);

    // Criar o novo usuário
    const usuario = await Usuario.create({
      email,
      senha: senhaHash,
      nome,
    });

    // Retornar resposta com sucesso
    res.status(201).json({ message: 'Usuário criado com sucesso!', usuario });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para buscar todos os usuários
exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
