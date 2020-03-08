const alumnosModel = require('../models/alumnos')

class alumnosController {
    guardar(req, res) {
        const direccion = {
            calle: req.body.calle,
            noInterior: req.body.noInterior,
            noExterior: req.body.noExterior,
            colonia: req.body.colonia,
            codigoPostal: req.body.codigoPostal,
            ciudad: req.body.ciudad,
            estado: req.body.estado,
        };
        const nuevo = new alumnosModel({
            numeroControl: req.body.numeroControl ,
            nombres: req.body.nombres ,
            apellidoPat: req.body.apellidoPat ,
            apellidoMat: req.body.apellidoMat ,
            fechaNacimiento: req.body.fechaNacimiento ,
            estadoCivil: req.body.estadoCivil ,
            genero: req.body.genero ,
            carrera: req.body.carrera ,
            planEstudios: req.body.planEstudios ,
            rcs: req.body.rcs ,
            movilidades: req.body.movilidades ,
            curp: req.body.curp ,
            correo: req.body.correo ,
            telefono: req.body.telefono ,
            direccion: direccion,
            semestre:  req.body.semestre ,
            promedio: req.body.promedio ,
            idiomas: req.body.idiomas ,
            dominio: req.body.dominio ,
            documentosAval: req.body.documentosAval ,
            institucion: req.body.institucion ,
            status: req.body.status ,
        });

        nuevo.save((error, data) => {
            console.log(error);
            if(error){
                return res.status(500).json({error});
            } else {
                return res.status(201).json({data: data})
            }
        });
    }
    leer(req, res){
        alumnosModel.find((error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(200).json({ data: data });
          }
        });
    }
    actualizar(req, res){
      console.log(req.body.params)
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
      
      /*solicitudModel.update({ _id: req.body.params._id }, actualizar, (error, data) => {
        if(error){
          return res.status(500).json({ error });
        }
        else{
          return res.status(201).json({ data: data });
        }
      });*/
    }
    
    buscar(req, res){
        if(req.params.dato === '-'){
          this.leer(req, res)
        }
        else{
          const query = new RegExp(req.params.dato, 'i')
    
          alumnosModel.find({
            $or: [
                { numeroControl: { $regex: query}},
                { nombres: { $regex: query}},
                { apellidoPat: { $regex: query}},
                { apellidoMat: { $regex: query}},
                { fechaNacimiento: { $regex: query}},
                { estadoCivil: { $regex: query}},
                { genero: { $regex: query}},
                { carrera: { $regex: query}},
                { planEstudios: { $regex: query}},
                { rcs: { $regex: query}},
                { movilidades: { $regex: query}},
                { curp: { $regex: query}},
                { correo: { $regex: query}},
                { telefono: { $regex: query}},
                { direccion: { $regex: query}},
                { semestre:  { $regex: query}},
                { promedio: { $regex: query}},
                { idiomas: { $regex: query}},
                { dominio: { $regex: query}},
                { documentosAval: { $regex: query}},
                { institucion: { $regex: query}},
                { status: { $regex: query}}
            ], status: 'Regular'}, (error, data) => {
            if(error){
              return res.status(500).json({ error })
            }
            else{
              return res.status(200).json({ data: data })
            }
          });
        }
    }
}

module.exports = alumnosController