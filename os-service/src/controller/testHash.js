const bcrypt = require('bcryptjs');

// A senha fornecida que você quer comparar com o hash
const senha = 'Teste11@gmail.com';

// O hash armazenado no banco de dados (exemplo fornecido)
const hashNoBanco = '$2a$10$bDMZNeUO5yB.eYIgNbGZd.c7n/iRnhyKSlTSkQ3cBzsBReppOv8YW';

// Comparar a senha fornecida com o hash no banco
bcrypt.compare(senha, hashNoBanco)
  .then((result) => {
    if (result) {
      console.log('Senha válida!');
    } else {
      console.log('Senha inválida!');
    }
  })
  .catch((err) => {
    console.error('Erro ao comparar senhas:', err);
  });
