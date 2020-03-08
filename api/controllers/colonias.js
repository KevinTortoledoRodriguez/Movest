const coloniasModel = require('../models/colonias');

class coloniasController {
      guardar( req, res) {
        const nuevo = new coloniasModel({
            nombre: req.body.nombre,
            municipio: req.body.municipio,
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
        coloniasModel.find((error, data) => {
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
    
          coloniasModel.find({
            $or: [
              { nombre: { $regex: query }},
              { municipio : { $regex: query }},
              { status: { $regex: query }},
            ], estatus: 'activo'}, (error, data) => {
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

module.exports = coloniasController