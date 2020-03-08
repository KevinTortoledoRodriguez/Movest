const materiasModel = require('../models/materias')

class materiasController {
    guardar(req, res) {
        const nuevo = new materiasModel({
            clave: req.body.clave,
            nombre: req.body.nombre,
            creditos: req.body.creditos,
            horasTeoricas: req.body.horasTeoricas,
            horasPracticas: req.body.horasPracticas,
            status: req.body.status
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
        materiasModel.find((error, data) => {
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
                {clave: { $regex: query}},
                {nombre: { $regex: query}},
                {creditos: { $regex: query}},
                {horasTeoricas: { $regex: query}},
                {horasPracticas: { $regex: query}},
                {status: { $rege: queryx}}
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

module.exports = materiasController