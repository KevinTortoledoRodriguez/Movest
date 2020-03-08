const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaDepartamentos = new Schema({
  nombre: { type: String, default:null},
  institucion: { type: Schema.Types.ObjectID, ref:'instituciones', default:null}
})

module.exports = mongoose.model('departamentos', schemaDepartamentos);