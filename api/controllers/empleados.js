const empleadosModel = require('../models/empleados');

class empleadosController {
      guardar( req, res) {
        const nuevo = new empleadosModel({
            nombres: req.body.nombres,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            correo: req.body.correo,
            departamento: req.body.departamento,
            puesto: req.body.puesto,
            carrera: req.body.carrera,
            status: req.body.status
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
        empleadosModel.find((error, data) => {
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
    
          empleadosModel.find({
            $or: [
                { nombres: { $regex: query }},
                { apellidoPaterno : { $regex: query }},
                { apellidoMaterno : { $regex: query }},
                { direccion : { $regex: query }},
                { telefono : { $regex: query }},
                { correo : { $regex: query }},
                { departamento : { $regex: query }},
                { puesto : { $regex: query }},
                { carrera : { $regex: query }},
                { status: { $regex: query }},
            ], status: 'activo'}, (error, data) => {
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

module.exports = empleadosController