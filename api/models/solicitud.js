const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')
const { Schema } = mongoose;

const connection = mongoose.createConnection('mongodb://localhost:27017');
autoIncrement.initialize(connection);

const schemaSolicitudes = new Schema({
  fecha: { type: Date, default: Date.now()},
  alumno: { type: Schema.Types.ObjectID, ref:'alumnos'},
  institucionOrigen: { type: Schema.Types.ObjectID, ref: 'instituciones'},
  institucionSolicitada: { type: Schema.Types.ObjectID, ref:'instituciones'},
  materias: [ {
    materia: { type: Schema.Types.ObjectId, ref:'materias'},
    calificacion: { type: Number, default:0}
  }],
  autorizacionCoordinadorOrigen: { type: Boolean, default:false},
  autorizacionCoordinadorDestino: { type: Boolean, default:false},
  autorizacionJefe: { type: Boolean, default:false},
  logs: [{
    log:{ type: String, enum: ['Generada','Leida', 'Autorizada por coordinador origen', 'Autorizada por coordinador destino', 'Autorizada por jefe de departamento','Aceptada','Transcurso','Finalizada','Cancelada']},
    fecha:{ type: Date, default: Date.now()}
  }],
  status: { type: String, enum: ['Pendiente', 'Por confirmar', 'Rechazada', 'Aprobada','En Curso', 'Terminada','Cancelada'], default:'Pendiente'}
})

schemaSolicitudes.plugin(autoIncrement.plugin, {
  model: 'Solicitud',
  field: 'folio',
  startAt: 1,
  incrementBy:1
})
module.exports = mongoose.model('solicitudes', schemaSolicitudes);