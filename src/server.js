const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))