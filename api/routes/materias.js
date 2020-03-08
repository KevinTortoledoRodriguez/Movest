const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materias.js')
const materias = new materiasController();

    router.post('/materias', (req, res) => {
        materias.guardar(req,res);
    });

    router.get('/materias', (req, res) => {
        materias.leer(req,res);
    });

    router.get('/materias/buscar/:dato', (req, res) => {
        materias.buscar(req, res)
    });

    router.put('/materias', (req, res) => {
        materias.actualizar(req,res);
    });

    router.delete('/materias/:materiaId', (req, res) => {
        materias.eliminar(req,res);
    });

module.exports = router;