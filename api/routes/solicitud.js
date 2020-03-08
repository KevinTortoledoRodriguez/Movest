const express = require('express');
const router = express.Router();
const solicitudController = require('../controllers/solicitud.js')
const solicitud = new solicitudController();

    router.post('/solicitud', (req, res) => {
        solicitud.guardar(req,res);
    });

    router.get('/solicitud', (req, res) => {
        solicitud.leer(req,res);
    });

    router.get('/solicitud/buscar/:dato', (req, res) => {
        solicitud.buscar(req, res)
    });

    router.put('/solicitud', (req, res) => {
        solicitud.actualizar(req,res);
    });

    router.delete('/solicitud/:solicitudId', (req, res) => {
        solicitud.eliminar(req,res);
    });

module.exports = router;