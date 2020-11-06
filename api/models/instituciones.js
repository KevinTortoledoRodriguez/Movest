const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaInstituciones = new Schema({
  nombre: { type: String, default:null},
  direccion: {
      _id: false, 
      calle: { type: String, default:null},
      numero: { type: Number, default: 0},
      colonia: { type: Schema.Types.ObjectID, ref:'colonias'},
      codigoPostal: { type: String, default: null},
      ciudad:       { type: Schema.Types.ObjectID, ref:'municipios' },
      estado:       { type: Schema.Types.ObjectID, ref:'estados' }
  },
  carreras:[{
    _id: false,
    carrera: {type: Schema.Types.ObjectID, ref:'carreras'},
  }],
  telefono: { type: String, default:null},
  correo: { type: String, default:null}
})

module.exports = mongoose.model('instituciones', schemaInstituciones);