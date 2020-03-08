const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.js')
const empleados = new empleadosController();

    router.post('/empleados', (req, res) => {
        empleados.guardar(req,res);
    });

    router.get('/empleados', (req, res) => {
        empleados.leer(req,res);
    });

    router.get('/empleados/buscar/:dato', (req, res) => {
        empleados.buscar(req, res)
    });

    router.put('/empleados', (req, res) => {
        empleados.actualizar(req,res);
    });

    router.delete('/empleados/:empleadoId', (req, res) => {
        empleados.eliminar(req,res);
    });

module.exports = router;