const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaMaterias = new Schema({
    clave:  { type: String, default: null},
    nombre: { type: String, default: null},
    creditos: { type: Number, default:3},
    horasTeoricas: { type: Number, default:0},
    horasPracticas: { type: Number, default:0},
    status: { type: String, enum:['activo', 'inactivo']}
})

module.exports = mongoose.model('materias', schemaMaterias);