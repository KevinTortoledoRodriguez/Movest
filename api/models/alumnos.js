const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaAlumnos = new Schema({
  numeroControl: { type: String , default: null },
  nombres:     { type: String, default: null },
  apellidoPat: { type: String, default: null },
  apellidoMat: { type: String, default: null },
  fechaNacimiento: { type: Date, default: Date.now() },
  estadoCivil:  { type: String, default: null },
  genero:  { type: String, enum:['Masculino', 'Femenino']},
  carrera: { type: Schema.Types.ObjectID, ref:'carreras'},
  planEstudio:  { type: String, default: '2016' },
  rcs: { type: Number, default:0 },
  movilidades: { type: Number, default:0 },
  adeudos: [{
    adeudo: { type: String, default:null }
  }],
  curp:  { type: String, default: null },
  correo:  { type: String, default: null },
  telefono:  { type: String, default: null },
  direccion:    {
      calle:            { type: String, default: null},
      noInterior:       { type: String, default: null },
      noExterior:       { type: String, default: null },
      colonia:          { type: Schema.Types.ObjectID, ref:'colonias' },
      codigoPostal:     { type: String, default: null},
      ciudad:           { type: Schema.Types.ObjectID, ref:'ciudades' },
      estado:           { type: Schema.Types.ObjectID, ref:'estados' }
    },
  semestre: { type: Number, default:1},
  promedio: { type: Number, default:100},
  idiomas: { type: String, default:null},
  dominio: { type: Number, default:0},
  documentosAval: { type: String, default:null},
  institucion: { type: Schema.Types.ObjectID, ref:'instituciones'},
  status: { type: String, enum:['Regular', 'Baja', 'Baja Parcial', 'Egresado']}
})

module.exports = mongoose.model('alumnos', schemaAlumnos);