const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  dataNascimento: { type: Date, required: true },
  idade: { type: Number, required: true },
  senha: { type: String, required: true },
  cartasEnviadas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carta' }],
  cartasRecebidas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carta' }]
});

module.exports = mongoose.model('Usuario', UsuarioSchema);