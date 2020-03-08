const solicitudModel = require('../models/solicitud');

class solicitudController {
      guardar( req, res) {
        const nuevo = new solicitudModel({
            alumno: req.body.params.alumno,
            institucionOrigen: req.body.params.institucionOrigen,
            institucionSolicitada: req.body.params.institucionSolicitada,
            materias: req.body.params.materias,
            logs: req.body.params.logs,
            status: 'Pendiente'
        });
        nuevo.save((error, data) => {
            console.log(error);
            if(error){
                return res.status(500).json( { error} );
            } else {
                return res.status(201).json( { data: data })
            }
        })
      }

      leer(req, res){
        solicitudModel.find((error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(200).json({ data: data });
          }
        });
      }

      buscar(req, res){
        if(req.params.dato === '-'){
          this.leer(req, res)
        }
        else{
          const query = new RegExp(req.params.dato, 'i')
          solicitudModel.find({
            $or: [
              { nombre: { $regex: query }},
              { institucion : { $regex: query }}
            ] /*status: 'activo'*/}, (error, data) => {
            if(error){
              return res.status(500).json({ error })
            }
            else{
              return res.status(200).json({ data: data })
            }
          });
        }
      }
      
      actualizar(req, res){
        const actualizar = {
            alumno: req.body.params.alumno,
            autorizacionCoordinadorOrigen: req.body.params.autorizacionCoordinadorOrigen,
            autorizacionCoordinadorDestino: req.body.params.autorizacionCoordinadorDestino,
            institucionOrigen: req.body.params.institucionOrigen,
            institucionSolicitada: req.body.params.institucionSolicitada,
            materias: req.body.params.materias,
            logs: req.body.params.logs,
            status: req.body.params.status
        };
        
        solicitudModel.update({ _id: req.body.params._id }, actualizar, (error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(201).json({ data: data });
          }
        });
      }
      
      cambiarCancelada(req, res){
        solicitudModel.update({ _id: req.params.solicitudId }, { status: 'Cancelada' }, (error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(203).json();
          }
        });
      }

      cambiarTerminada(req, res){
        solicitudModel.update({ _id: req.params.solicitudId }, { status: 'Terminada' }, (error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(203).json();
          }
        });
      }
      cambiarEnProceso(req, res){
        solicitudModel.update({ _id: req.params.solicitudId }, { status: 'En Proceso' }, (error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(203).json();
          }
        });
      }
      cambiarEnTranscurso(req, res){
        solicitudModel.update({ _id: req.params.solicitudId }, { status: 'En Transcurso' }, (error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(203).json();
          }
        });
      }
}

module.exports = solicitudController