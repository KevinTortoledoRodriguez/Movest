const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaEmpleados = new Schema({
  nombres: { type: String, default:null},
  apellidoPaterno: { type: String, default:null},
  apellidoMaterno: { type: String, default:null},
  direccion: { 
      calle: { type: String, default:null},
      numero: { type: Number, default: 0},
      colonia: { type: Schema.Types.ObjectID, ref:'colonias'},
      codigoPostal: { type: String, default: null},
      ciudad:       { type: Schema.Types.ObjectID, ref:'ciudades' },
      estado:       { type: Schema.Types.ObjectID, ref:'estados' }
  },
  telefono: { type: String, default:null},
  correo: { type: String, default:null},
  institucion: {type: Schema.Types.ObjectID, ref:'instituciones'},
  departamento: { type: Schema.Types.ObjectID, ref:'departamentos'},
  puesto: { type: String, default: null},
  carrera: { type: Schema.Types.ObjectID, ref: 'carreras', default:null},
  status: { type: String, enum: ['activo', 'inactivo'], default:'activo' }
})

module.exports = mongoose.model('empleados', schemaEmpleados);