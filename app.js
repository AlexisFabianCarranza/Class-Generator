const express = require('express');
const http = require('http');
const app = express();
const generator = require('./generate_class/index');
generator();

var port = process.env.PORT || '4000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', () =>
  console.error('Ha ocurrido un error al levantar el servidor')
);
server.on('listening', () =>
  console.log('Servidor corriendo correctamente en el puerto: ' + port)
);
