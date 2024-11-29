const bcrypt = require('bcryptjs');

// Senha para a qual você quer gerar o hash
const senha = 'teste11@gmail.com';

// Gerando o hash
bcrypt.hash(senha, 10, (err, hash) => {
  if (err) {
    console.log('Erro ao gerar o hash:', err);
  } else {
    console.log('Hash gerado:', hash);
  }
});
