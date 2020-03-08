const departamentosModel = require('../models/departamentos');

class departamentosController {
      guardar( req, res) {
        const nuevo = new departamentosModel({
            nombre: req.body.nombre,
            institucion: req.body.institucion
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
        departamentosModel.find((error, data) => {
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
    
          departamentosModel.find({
            $or: [
              { nombre: { $regex: query }},
              { institucion : { $regex: query }}
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

module.exports = departamentosController