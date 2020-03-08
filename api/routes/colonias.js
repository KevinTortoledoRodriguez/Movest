const express = require('express');
const router = express.Router();
const coloniasController = require('../controllers/colonias.js')
const colonias = new coloniasController();

    router.post('/colonias', (req, res) => {
        colonias.guardar(req,res);
    });

    router.get('/colonias', (req, res) => {
        colonias.leer(req,res);
    });

    router.get('/colonias/buscar/:dato', (req, res) => {
        colonias.buscar(req, res)
    });

    router.put('/colonias', (req, res) => {
        colonias.actualizar(req,res);
    });

    router.delete('/colonias/:coloniaId', (req, res) => {
        colonias.eliminar(req,res);
    });

module.exports = router;