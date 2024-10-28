document.getElementById('botonUsuarios').addEventListener('click', obtenerUsuarios);
document.getElementById('botonPublicaciones').addEventListener('click', obtenerPublicaciones);
async function obtenerUsuarios() {
    try {
    const respuesta = await fetch('/api/usuarios');
    const usuarios = await respuesta.json();
    mostrarUsuarios(usuarios);
    } catch (error) {
    console.error('Error al obtener usuarios:', error);
    }
   }
   async function obtenerPublicaciones() {
    try {
    const respuesta = await fetch('/api/publicaciones');
    const publicaciones = await respuesta.json();
    mostrarPublicaciones(publicaciones);
    } catch (error) {
    console.error('Error al obtener publicaciones:', error);
    }
   }
   function mostrarUsuarios(usuarios) {
    const divUsuarios = document.getElementById('usuarios');
    divUsuarios.innerHTML = '<h2>Usuarios</h2>';
    usuarios.forEach(usuario => {
    divUsuarios.innerHTML += `<p>ID: ${usuario.id} - Nombre: ${usuario.nombre} - Edad: ${usuario.edad}</p>`;
    });
   }
   function mostrarPublicaciones(publicaciones) {
    const divPublicaciones = document.getElementById('publicaciones');
    divPublicaciones.innerHTML = '<h2>Publicaciones</h2>';
    publicaciones.forEach(publicacion => {
    divPublicaciones.innerHTML += `<p>ID: ${publicacion.id} - Contenido: ${publicacion.contenido}</p>`;
    });
   }
   