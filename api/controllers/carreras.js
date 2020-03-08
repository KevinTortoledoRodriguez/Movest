const carrerasModel = require('../models/carreras');

class carrerasController {
      guardar( req, res) {
        const nuevo = new carrerasModel({
            nombre: req.body.nombre,
            materias: req.body.materias,
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
        carrerasModel.find((error, data) => {
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
    
          carrerasModel.find({
            $or: [
              { nombre: { $regex: query }},
              { materias : { $regex: query }},
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

module.exports = carrerasController