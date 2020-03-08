const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaMunicios = new Schema({
  nombre: { type: String, default:null },
  estado: { type: Schema.Types.ObjectID, ref:'estados' },
  status: { type: String, enum:['activo', 'inactivo']}
})

module.exports = mongoose.model('municipios', schemaMunicios);