const express = require('express');
const router = express.Router();
const municipiosController = require('../controllers/municipios.js')
const municipios = new municipiosController();

    router.post('/municipios', (req, res) => {
        municipios.guardar(req,res);
    });

    router.get('/municipios', (req, res) => {
        municipios.leer(req,res);
    });

    router.get('/municipios/buscar/:dato', (req, res) => {
        municipios.buscar(req, res)
    });

    router.put('/municipios', (req, res) => {
        municipios.actualizar(req,res);
    });

    router.delete('/municipios/:municipioId', (req, res) => {
        municipios.eliminar(req,res);
    });

module.exports = router;