const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/guardar-mensaje', function(req, res) {
    var mensaje = req.body;

    // Guardar el mensaje en un archivo JSON en el servidor
    fs.writeFile('mensaje.json', JSON.stringify(mensaje), function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar el mensaje.');
        } else {
            res.send('Mensaje guardado correctamente.');
        }
    });
});

app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000');
});
