const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnos.js')
const alumnos = new alumnosController();

    router.post('/alumnos', (req, res) => {
        alumnos.guardar(req,res);
    });

    router.get('/alumnos', (req, res) => {
        alumnos.leer(req,res);
    });

    router.get('/alumnos/buscar/:dato', (req, res) => {
        alumnos.buscar(req, res)
    });

    router.put('/alumnos', (req, res) => {
        alumnos.actualizar(req,res);
    });

    router.delete('/alumnos/:alumnoId', (req, res) => {
        alumnos.eliminar(req,res);
    });

module.exports = router;