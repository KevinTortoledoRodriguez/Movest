const express = require('express')
const alumnos = require('./alumnos');
const logins = require('./logins');
const estados = require('./estados')
const carreras = require('./carreras')
const colonias = require('./colonias')
const departamentos = require('./departamentos')
const empleados = require('./empleados')
const instituciones = require('./instituciones')
const materias = require('./materias')
const municipios = require('./municipios')
const solicitud = require('./solicitud')

const app = express()

app.use(alumnos);
app.use(logins);
app.use(estados);
app.use(carreras);
app.use(colonias);
app.use(departamentos);
app.use(empleados);
app.use(instituciones);
app.use(materias);
app.use(municipios);
app.use(solicitud);

module.exports = app;