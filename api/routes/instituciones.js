const express = require('express');
const router = express.Router();
const institucionesController = require('../controllers/instituciones.js')
const instituciones = new institucionesController();

    router.post('/instituciones', (req, res) => {
        instituciones.guardar(req,res);
    });

    router.get('/instituciones', (req, res) => {
        instituciones.leer(req,res);
    });

    router.get('/instituciones/buscar/:dato', (req, res) => {
        instituciones.buscar(req, res)
    });

    router.put('/instituciones', (req, res) => {
        instituciones.actualizar(req,res);
    });

    router.delete('/instituciones/:institucionId', (req, res) => {
        instituciones.eliminar(req,res);
    });

module.exports = router;