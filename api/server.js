const express = require('express');
const routes =  require('./routes');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3005

app.set('port', port);

app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'HEAD, OPTIONS, DELETE, PUT, GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Api-Key');
    next();
});

mongoose.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (error, res) => {
  if (error) throw error
  console.log('Conexión a la base de datos establecida.')

  app.listen(port, () => {
    console.log(`API corriendo en http://localhost:${port}`)
  })
})
