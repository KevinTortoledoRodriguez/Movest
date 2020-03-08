const express = require('express');
const router = express.Router();
const departamentosController = require('../controllers/departamentos.js')
const departamentos = new departamentosController();

    router.post('/departamentos', (req, res) => {
        departamentos.guardar(req,res);
    });

    router.get('/departamentos', (req, res) => {
        departamentos.leer(req,res);
    });

    router.get('/departamentos/buscar/:dato', (req, res) => {
        departamentos.buscar(req, res)
    });

    router.put('/departamentos', (req, res) => {
        departamentos.actualizar(req,res);
    });

    router.delete('/departamentos/:departamentoId', (req, res) => {
        departamentos.eliminar(req,res);
    });

module.exports = router;