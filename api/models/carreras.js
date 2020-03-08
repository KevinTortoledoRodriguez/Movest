const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaCarreras = new Schema({
    nombre: { type: String, default:null},
    materias: [{ 
        materia: {type: Schema.Types.ObjectId, ref:'materias'},
    }],
    status: { type: String, enum:['activo', 'inactivo']}
})

module.exports = mongoose.model('carreras', schemaCarreras);