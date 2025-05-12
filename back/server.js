// Polyfill para Node < 18
if (typeof Object.hasOwn !== 'function') {
  Object.hasOwn = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// URI de conexão local com MongoDB (altere se quiser usar Atlas)
const mongoURI = 'mongodb://localhost:27017/logins';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado!'))
.catch(err => console.error('Erro ao conectar no MongoDB:', err));

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API rodando na porta 3000');
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
