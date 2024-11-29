const express = require('express');
const cors = require('cors');  // Importe o CORS
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const despesaRoutes = require('./routes/despesaRoutes');
const receitaRoutes = require('./routes/receitaRoutes');

const app = express();

// Configure o CORS para aceitar qualquer origem (se quiser permitir ngrok ou outras origens específicas)
app.use(cors());  // Permite todas as origens. Você pode customizar se necessário

// Configurar o body parser
app.use(bodyParser.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/despesas', despesaRoutes);
app.use('/receitas', receitaRoutes);

// Rota para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
