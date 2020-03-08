const municipiosModel = require('../models/municipios')

class municipiosController {
    guardar(req, res) {
        const nuevo = new municipiosModel({
            nombre: req.body.nombre,
            estado: req.body.estado,
            status: req.body.status
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
        municipiosModel.find((error, data) => {
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
                { estado: { $regex: query}},
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

module.exports = municipiosController