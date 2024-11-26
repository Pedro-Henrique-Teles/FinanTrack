const express = require('express');
const sequelize = require('./bd/database');
const despesaRoutes = require('./routes/despesaRoutes');
const receitaRoutes = require('./routes/receitaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
app.use(express.json());

// Usar as rotas para **Despesas**, **Receitas** e **Usuários**
app.use('/despesa', despesaRoutes);
app.use('/receita', receitaRoutes);
app.use('/usuario', usuarioRoutes);

// Inicie o servidor e sincronize o banco
sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((err) => console.log(err));
