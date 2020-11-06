const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaLogins = new Schema({
  userName: { type: String, default: null},
  password: { type: String, default: null},
  tipoLogin: { type: String, enum:['Empleado', 'Estudiante', null], default: null},
  usuario: { type: String, default: null },
  status: { type: String, enum:['activo', 'inactivo'], default:'activo'}
})

module.exports = mongoose.model('logins', schemaLogins);