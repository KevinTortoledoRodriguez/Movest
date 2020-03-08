const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaColonias = new Schema({
  nombre: { type: String, default:null },
  municipio: { type: Schema.Types.ObjectID, ref:'municipios' },
  status: { type: String, enum:['activo', 'inactivo']}
})

module.exports = mongoose.model('colonias', schemaColonias);