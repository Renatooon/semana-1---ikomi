const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/nosotros.html'));
});

app.post('/contacto', (req, res) => {
    const { nombre, telefono, correo, asunto, mensaje } = req.body;
    console.log(`Mensaje de: ${nombre}, Teléfono: ${telefono}, Correo: ${correo}, Asunto: ${asunto}, Mensaje: ${mensaje}`);
    res.send('Mensaje recibido. Gracias por contactarnos.');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
