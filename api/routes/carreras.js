const express = require('express');
const router = express.Router();
const carrerasController = require('../controllers/carreras.js')
const carreras = new carrerasController();

    router.post('/carreras', (req, res) => {
        carreras.guardar(req,res);
    });

    router.get('/carreras', (req, res) => {
        carreras.leer(req,res);
    });

    router.get('/carreras/buscar/:dato', (req, res) => {
        carreras.buscar(req, res)
    });

    router.put('/carreras', (req, res) => {
        carreras.actualizar(req,res);
    });

    router.delete('/carreras/:carreraId', (req, res) => {
        carreras.eliminar(req,res);
    });

module.exports = router;