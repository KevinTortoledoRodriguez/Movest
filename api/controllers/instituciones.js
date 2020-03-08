const institucionesModel = require('../models/instituciones')

class institucionesController {
    guardar(req, res) {
        const nuevo = new institucionesModel({
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            carreras: req.body.carreras,
            telefono: req.body.telefono,
            correo: req.body.correo
        });
        console.log(nuevo)
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
        institucionesModel.find((error, data) => {
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
    
          alumnosModel.find({
            $or: [
                { nombre: { $regex: query}},
                { direccion: { $regex: query}},
                { carreras: { $regex: query}},
                { telefono: { $regex: query}},
                { status: { $regex: query}}
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

module.exports = institucionesController