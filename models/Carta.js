const mongoose = require('mongoose');

const CartaSchema = new mongoose.Schema({
  dataEmissao: { type: Date, required: true, default: Date.now },
  escritor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  destinatario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: false },
  conteudo: { type: String, required: true },
  tipo: { type: String, enum: ['carta', 'resposta'], required: true },
  respostas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carta' }],
  respondida: { type: Boolean, required: true, default: false }
});


module.exports = mongoose.model('Carta', CartaSchema);

