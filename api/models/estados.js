const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaEstados = new Schema({
  nombre: { type: String, default:null },
  status: { type: String, enum:['activo', 'inactivo'], default:'activo'}
})

module.exports = mongoose.model('estados', schemaEstados);