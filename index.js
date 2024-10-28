// Importar las dependencias necesarias
const express = require('express');
const path = require('path');
// Inicializar Express
const app = express();
// Configuración del puerto
const puerto = 3000;
// Configuración de archivos estáticos y motor de vistas
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Datos simulados de usuarios y publicaciones
const usuarios = [
 { id: 1, nombre: 'Juan Pérez', edad: 25 },
 { id: 2, nombre: 'María Gómez', edad: 30 },
];
const publicaciones = [
 { id: 1, usuarioId: 1, contenido: 'Este es mi primer post!' },
 { id: 2, usuarioId: 2, contenido: 'Hoy es un gran día para programar!' },
];
// Ruta para obtener la lista de usuarios
app.get('/api/usuarios', (req, res) => {
 res.json(usuarios);
});
// Ruta para obtener la lista de publicaciones
app.get('/api/publicaciones', (req, res) => {
 res.json(publicaciones);
});
// Ruta para la página principal
app.get('/', (req, res) => {
 res.render('index');
});
// Iniciar el servidor
app.listen(puerto, () => {
 console.log(`Servidor en ejecución en http://localhost:${puerto}`);
});
