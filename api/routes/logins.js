const express = require('express');
const router = express.Router();
const loginsController = require('../controllers/logins')
const logins = new loginsController();

    router.post('/logins', (req, res) => {
        logins.guardar(req,res);
    });

    router.get('/logins', (req, res) => {
        logins.leer(req,res);
    });

    router.get('/logins/buscar/:dato', (req, res) => {
        logins.buscar(req, res)
    });

    router.put('/logins', (req, res) => {
        logins.actualizar(req,res);
    });

    router.delete('/logins/:loginId', (req, res) => {
        logins.eliminar(req,res);
    });

module.exports = router;