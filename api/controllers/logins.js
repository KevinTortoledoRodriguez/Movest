const loginModel = require('../models/logins');

class LoginsController {
      guardar( req, res) {
        const user = new loginModel({
            userName: req.body.userName,
            password: req.body.password,
            tipoLogin: req.body.tipoLogin,
            usuario: req.body.usuario,
            status: req.body.status
        });

        user.save((error, data) => {
            console.log(error);
            if(error){
                return res.status(500).json( { error} );
            } else {
                return res.status(201).json( { data: data })
            }
        })
      }

      leer(req, res){
        loginModel.find((error, data) => {
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
    
          loginModel.find({
            $or: [
              { nombre: { $regex: query }},
              { password: { $regex: query }},
              { tipoLogin: { $regex: query }},
              { usuario: { $regex: query }},
              { status: { $regex: query }}
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

      actualizar(req, res){
        const actualizar = {
            userName    : req.body.params.userName,
            password    : req.body.params.password,
            tipoLogin   : req.body.params.tipoLogin,
            usuario     : req.body.params.usuario,
            status      : req.body.params.status          
        };
    
        loginModel.update({ _id: req.body.params.loginId }, actualizar, (error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(201).json({ data: data });
          }
        });
      }
      
      eliminar(req, res){
        loginModel.update({ _id: req.params.loginId }, { status: 'inactivo' }, (error, data) => {
          if(error){
            return res.status(500).json({ error });
          }
          else{
            return res.status(203).json();
          }
        });
      }
}

module.exports = LoginsController