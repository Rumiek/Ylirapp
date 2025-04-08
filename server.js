const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

// Configurar middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar motor de vistas para HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Exportar la app para pkg
module.exports = app;