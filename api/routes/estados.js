const express = require('express');
const router = express.Router();
const estadosController = require('../controllers/estados.js')
const estados = new estadosController();

    router.post('/estados', (req, res) => {
        estados.guardar(req,res);
    });

    router.get('/estados', (req, res) => {
        estados.leer(req,res);
    });

    router.get('/estados/buscar/:dato', (req, res) => {
        estados.buscar(req, res)
    });

    router.put('/estados', (req, res) => {
        estados.actualizar(req,res);
    });

    router.delete('/estados/:estadosId', (req, res) => {
        estados.eliminar(req,res);
    });

module.exports = router;